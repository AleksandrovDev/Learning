import { Level } from "./Classes/Level.js";
import { State } from "./Classes/State.js";

function trackKeys(keys) {
  let down = Object.create(null);
  function track(event) {
    if (keys.includes(event.key)) {
      down[event.key] = event.type == "keydown";
      event.preventDefault();
    }
  }
  window.addEventListener("keydown", track);
  window.addEventListener("keyup", track);
  return down;
}

const arrowKeys = trackKeys(["ArrowLeft", "ArrowRight", "ArrowUp"]);

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;
      if (frameFunc(timeStep) === false) {
        return;
      }
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;
  let pause = false;

  return new Promise((resolve) => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        pause = pause ? false : true;
        if (!pause) {
          runAnimation(frame);
        }
      }
    });

    function frame(time) {
      if (pause) {
        return false;
      }
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    }

    runAnimation(frame);
  });
}

export async function runGame(plans, Display) {
  let lives = 0;
  for (let level = 0; level < plans.length; ) {
    console.log(`Current lives: ${lives}`);
    let status = await runLevel(new Level(plans[level]), Display);
    if (status == "won") {
      level++;
    } else if (status == "lost") {
      if (lives === 0) {
        console.log("You have lost");
        const finalNode = document.createElement("div");
        finalNode.textContent = "GAME OVER";
        document.body.appendChild(finalNode);

        return;
      }
      lives--;
    }
  }
  console.log("You've won");
}
