import { baseControls, baseTools, startState } from "./config.js";
import { PixelEditor } from "./PixelEditor.js";
import { historyUpdateState } from "./stateHelper.js";

export function startPixelEditor({ state = startState, tools = baseTools, controls = baseControls }) {
  let app = new PixelEditor(state, {
    tools,
    controls,
    dispatch(action) {
      state = historyUpdateState(state, action);
      app.syncState(state);
    },
  });
  return app.dom;
}

document.querySelector('div').appendChild(startPixelEditor({}))