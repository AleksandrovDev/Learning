import { createServer } from "http";
import { Router } from "./Router.js";
import ecstatic from "ecstatic";
import { writeFile, readFile } from "fs/promises";
import { resolve } from "path";
import { v4 as uuidv4 } from "uuid";

const router = new Router();
const defaultHeaders = {
  "Content-Type": "text/plain",
};

class SkillShareServer {
  constructor(talks) {
    this.talks = talks;
    this.version = 0;
    this.waiting = [];

    let fileServer = ecstatic({
      root: "./Projects/SkillSharingWebsite/public",
    });

    this.server = createServer(async (request, response) => {
      let resolved = router.resolve(this, request);
      if (resolved) {
        resolved
          .catch((error) => {
            if (error.status != null) {
              return error;
            }
            return {
              body: String(error),
              status: 500,
            };
          })
          .then(({ body, status = 200, headers = defaultHeaders }) => {
            response.writeHead(status, headers);
            response.end(body);
          });
      } else {
        fileServer(request, response);
      }
    });
  }

  start(port) {
    this.server.listen(port);
  }

  stop() {
    this.server.close();
  }
}

const talkPath = /^\/talks\/([^\/]+)$/;

router.add("GET", talkPath, async (server, title) => {
  if (title in server.talks) {
    return {
      body: JSON.stringify(server.talks[title]),
      headers: { "Content-type": "application/json" },
    };
  } else {
    return {
      status: 404,
      body: `No talk '${title} found`,
    };
  }
});

router.add("DELETE", talkPath, async (server, talkId) => {
  if (talkId in server.talks) {
    delete server.talks[talkId];
    await server.updated();
  }
  return {
    status: 204,
  };
});

function readStream(stream) {
  return new Promise((resolve, reject) => {
    let data = "";
    stream.on("error", reject);
    stream.on("data", (chunk) => (data += chunk.toString()));
    stream.on("end", () => resolve(data));
  });
}

router.add("PUT", talkPath, async (server, title, request) => {
  let requestBody = await readStream(request);
  let talk;
  try {
    talk = JSON.parse(requestBody);
  } catch (_) {
    return {
      status: 400,
      body: "Invalid JSON",
    };
  }

  if (!talk || typeof talk.presenter != "string" || typeof talk.summary != "string") {
    return {
      status: 400,
      body: "Bad talk data",
    };
  }
  const generatedId = uuidv4();

  server.talks[generatedId] = {
    id: generatedId,
    title,
    presenter: talk.presenter,
    summary: talk.summary,
    comments: [],
};

  await server.updated();
  return {
    status: 204,
  };
});

router.add("POST", /^\/talks\/([^\/]+)\/comments$/, async (server, talkId, request) => {
  let requestBody = await readStream(request);
  let comment;
  try {
    comment = JSON.parse(requestBody);
  } catch (_) {
    return {
      status: 400,
      body: "Invalid JSON",
    };
  }

  if (!comment || typeof comment.author != "string" || typeof comment.message != "string") {
    return {
      status: 400,
      body: "Bad comment data",
    };
  } else if (talkId in server.talks) {
    server.talks[talkId].comments.push(comment);
    await server.updated();
    return {
      status: 204,
    };
  } else {
    return {
      status: 404,
      body: `No talk '${talkId} found`,
    };
  }
});

SkillShareServer.prototype.talkResponse = async function () {
  // let talksList = [];
  // for (let title of Object.keys(this.talks)) {
  //   talksList.push(this.talks[title]);
  // }
  async function saveTalks(talks) {
    await writeFile("./data.json", talks);
  }
  await saveTalks(JSON.stringify(this.talks));
  
  
  return {
    body: JSON.stringify(this.talks),
    headers: {
      "Content-Type": "application/json",
      ETag: `${this.version}`,
      "Cache-Control": "no-store",
    },
  };
};

router.add("GET", /^\/talks$/, async (server, request) => {
  let tag = /(.*)/.exec(request.headers["if-none-match"]);
  let wait = /\bwait=(\d+)/.exec(request.headers["prefer"]);

  if (!tag || tag[1] != server.version) {
    return await server.talkResponse();
  } else if (!wait) {
    return {
      status: 304,
    };
  } else {
    return server.waitForChanges(Number(wait[1]));
  }
});

SkillShareServer.prototype.waitForChanges = function (time) {
  return new Promise((resolve) => {
    this.waiting.push(resolve);
    setTimeout(() => {
      if (!this.waiting.includes(resolve)) {
        return;
      }
      this.waiting = this.waiting.filter((r) => r != resolve);
      resolve({
        status: 304,
      });
    }, time * 1000);
  });
};

SkillShareServer.prototype.updated = async function () {
  this.version++;
  let response = await this.talkResponse();
  this.waiting.forEach((resolve) => resolve(response));
  this.waiting = [];
};

async function getDataFromFile() {
  let data;
  try {
    data = JSON.parse(await readFile("./data.json", "utf-8"));
  } catch (e) {
    data = {};
  }
  return data;
}

new SkillShareServer(await getDataFromFile()).start(8000);
