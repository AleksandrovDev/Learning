import { elt } from "./stateHelper.js";

export class ToolSelect {
  constructor(state, { tools, dispatch }) {
    this.select = elt(
      "select",
      {
        onchange: () => dispatch({ tool: this.select.value }),
      },
      ...Object.keys(tools).map((name) =>
        elt(
          "option",
          {
            selected: name == state.tool,
          },
          name
        )
      )
    );

    this.dom = elt("label", null, "\u{1F58C} Tool: ", this.select);
  }

  syncState(state) {
    this.select.value = state.tool;
  }
}
