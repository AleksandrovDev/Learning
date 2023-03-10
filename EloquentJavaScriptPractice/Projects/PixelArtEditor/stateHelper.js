import { around } from "./config.js";

export function updateState(state, action) {
  return { ...state, ...action };
}

export function elt(type, props, ...children) {
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

export function draw(pos, state, dispatch) {
  function drawPixel({ x, y }, state) {
    let drawn = { x, y, color: state.color };
    dispatch({ picture: state.picture.draw([drawn]) });
  }
  drawPixel(pos, state);
  return drawPixel;
}

export function drawPicture(picture, canvas, scale) {
  canvas.width = picture.width * scale;
  canvas.height = picture.height * scale;
  let cx = canvas.getContext('2d');

  for (let y = 0; y < picture.height; y++) {
    for (let x = 0; x < picture.width; x++) {
      cx.fillStyle = picture.pixel(x, y);
      cx.fillRect(x * scale, y * scale, scale, scale);
    }
  }
}

export function rectangle(start, state, dispatch) {
  function drawRectangle(pos) {
    let xStart = Math.min(start.x, pos.x);
    let yStart = Math.min(start.y, pos.y);
    let xEnd = Math.max(start.x, pos.x);
    let yEnd = Math.max(start.y, pos.y);
    let drawn = [];

    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        drawn.push({ x, y, color: state.color });
      }
    }

    dispatch({ picture: state.picture.draw(drawn) });
  }

  drawRectangle(start);
  return drawRectangle;
}

export function fill({ x, y }, state, dispatch) {
  let targetColor = state.picture.pixel(x, y);
  let drawn = [{ x, y, color: state.color }];
  for (let done = 0; done < drawn.length; done++) {
    for (let { dx, dy } of around) {
      let x = drawn[done].x + dx;
      let y = drawn[done].y + dy;

      if (
        x >= 0 &&
        x < state.picture.width &&
        y >= 0 &&
        y < state.picture.height &&
        state.picture.pixel(x, y) == targetColor &&
        !drawn.some((p) => p.x == x && p.y == y)
      ) {
        drawn.push({ x, y, color: state.color });
      }
    }
  }

  dispatch({ picture: state.picture.draw(drawn) });
}

export function pick(pos, state, dispatch) {
  dispatch({ color: state.picture.pixel(pos.x, pos.y) });
}

export function historyUpdateState(state, action) {
  if (action.undo == true) {
    if (state.done.length == 0) {
      return state;
    }
    return {
      ...state,
      ...{
        picture: state.done[0],
        done: state.done.slice(1),
        doneAt: 0,
      },
    };
  } else if (action.picture && state.doneAt < Date.now() - 1000) {
    return {
      ...state,
      ...action,
      ...{
        done: [state.picture, ...state.done],
        doneAt: Date.now(),
      },
    };
  } else {
    return {
      ...state,
      ...action,
    };
  }
}
