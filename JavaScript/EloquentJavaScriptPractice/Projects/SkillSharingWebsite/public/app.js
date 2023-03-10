'use strict'

function handleAction(state, action) {
  if (action.type == 'setUser') {
    localStorage.setItem('userName', action.user);
    return {
      ...state,
      user: action.user,
    }
  } else if(action.type == 'setTalks') {
    return {
      ...state,
      talks: action.talks,
    }
  } else if (action.type == 'newTalk') {
    fetchOK(talkURL(action.title), {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        presenter: state.user,
        summary: action.summary,
      })
    }).catch(reportError);
  } else if (action.type == 'deleteTalk') {
    fetchOK(talkURL(action.talk), { method: 'DELETE'}).catch(reportError);
  } else if (action.type == 'newComment') {
    fetchOK(talkURL(action.talk) + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        author: state.user,
        message: action.message,
      })
    }).catch(reportError)
  }
  return state;
}

function fetchOK(url, options) {
  return fetch(url, options).then(response => {
    if (response.status < 400) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  })
}

function talkURL(title) {
  return 'talks/' + encodeURIComponent(title);
}

function reportError(error) {
  alert(String(error));
}

async function pollTalks(update) {
  let tag = undefined;
  for (;;) {
    let response;
    try {
      response = await fetchOK('/talks', {
        headers: tag && {
          'If-None-Match': tag,
          'Prefer': 'wait=90',
        }
      });
    } catch (e) {
      console.log('Request failed: ' + e);
      await new Promise(resolve => setTimeout(resolve, 500));
      continue;
    }
    if (response.status == 304) {
      continue;
    }
    tag = response.headers.get('ETag');
    update(await response.json());
  }
}


function renderUserField(name, dispatch) {
  return elt(
    "label",
    {},
    "Your name: ",
    elt("input", {
      type: "text",
      value: name,
      onchange(event) {
        dispatch({
          type: "setUser",
          user: event.target.value,
        });
      },
    })
  );
}

function elt(type, props, ...children) {
  let dom = document.createElement(type);
  if (props) {
    Object.assign(dom, props);
  }
  for (let child of children) {
    if (typeof child != "string") {
      dom.appendChild(child);
    } else {
      dom.appendChild(document.createTextNode(child));
    }
  }
  return dom;
}

function renderTalk(talk, dispatch) {
  return elt(
    "section",
    { className: "talk",
      id: talk.id,
     },
    elt(
      "h2",
      null,
      talk.title,
      " ",
      elt(
        "button",
        {
          type: "button",
          onclick() {
            dispatch({ type: "deleteTalk", talk: talk.id });
          },
        },
        "Delete"
      )
    ),
    elt("div", null, "by ", elt("strong", null, talk.presenter)),
    elt("p", null, talk.summary),
    ...talk.comments.map(renderComment),
    elt(
      "form",
      {
        onsubmit(event) {
          event.preventDefault();
          let form = event.target;
          dispatch({
            type: "newComment",
            talk: talk.id,
            message: form.elements.comment.value,
          });
          form.reset();
        },
      },
      elt("input", {
        type: "text",
        name: "comment",
      }),
      " ",
      elt("button", { type: "submit" }, "Add comment")
    )
  );
}

function renderComment(comment) {
  return elt("p", { className: "comment", id: comment.message }, elt("strong", null, comment.author), ": ", comment.message);
}

function renderTalkForm(dispatch) {
  let title = elt("input", { type: "text" });
  let summary = elt("input", { type: "text" });
  return elt(
    "form",
    {
      onsubmit(event) {
        event.preventDefault();
        dispatch({
          type: "newTalk",
          title: title.value,
          summary: summary.value,
        });
        event.target.reset();
      },
    },
    elt("h3", null, "Submit a Talk"),
    elt("label", null, "Title: ", title),
    elt("label", null, "Summary: ", summary),
    elt("button", { type: "submit" }, "Submit")
  );
}



class SkillShareApp {
  constructor(state, dispatch) {
    this.dispatch = dispatch;
    this.talkDOM = elt("div", { className: "talks" });
    this.dom = elt("div", null, renderUserField(state.user, dispatch), this.talkDOM, renderTalkForm(dispatch));
    this.syncState(state);
  }

  syncState(state) {
    if (!this.talks || Object.keys(this.talks).length === 0) {
      for (let talk of Object.values(state.talks)) {
        this.talkDOM.appendChild(renderTalk(talk, this.dispatch));
      }
      this.talks = state.talks;
      return;
    };

    if (state.talks != this.talks) {
      for (let talk of Object.values(state.talks)) {
        const isExistingTalk = talk.id in this.talks;

        if (!isExistingTalk) {
          this.talkDOM.appendChild(renderTalk(talk, this.dispatch));
          continue;
        }

        // check for new comments
        // TODO: add ids to the comments to avoid rerendering old ones
        if (talk.comments.length !== this.talks[talk.id].comments.length) {
          // remove existing comments
          const talkComments = document.getElementById(talk.id).getElementsByClassName('comment');

          while (talkComments.length > 0) {
            talkComments[0].parentNode.removeChild(talkComments[0]);
          }

          for (let comment of talk.comments) {
            document.getElementById(talk.id).insertBefore(renderComment(comment), document.getElementById(talk.id).lastChild); // append this befor submit form
          }
        }
      }

      // check for deleted talks
      for (let talkId of Object.keys(this.talks)) {
        if (!(talkId in state.talks)) {
          document.getElementById(talkId).remove();
          delete this.talks[talkId];
        }
      }

      this.talks = state.talks;
    }
  }
}

function runApp() {
  let user = localStorage.getItem("userName") || "Anon";
  let state, app;
  function dispatch(action) {
    state = handleAction(state, action);
    app.syncState(state);
  }

  pollTalks((talks) => {
    if (!app) {
      state = { user, talks };
      app = new SkillShareApp(state, dispatch);
      document.body.appendChild(app.dom);
    } else {
      dispatch({ type: "setTalks", talks });
    }
  }).catch(reportError);
}

runApp();
