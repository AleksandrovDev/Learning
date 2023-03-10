import { ColorSelect } from "./ColorSelect.js";
import { LoadButton } from "./LoadButton.js";
import { Picture } from "./Picture.js";
import { SaveButton } from "./SaveButton.js";
import { ToolSelect } from "./ToolSelect.js";
import { UndoButton } from "./UndoButton.js";
import {draw, rectangle, pick, fill} from './stateHelper.js';

export const scale = 3;
export const around = [
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1 },
];
export const startState = {
  tool: 'draw',
  color: '#000000',
  picture: Picture.empty(150, 70, '#f0f0f0'),
  done: [],
  doneAt: 0,
}

export const baseTools = {
  draw, fill, rectangle, pick
}

export const baseControls = [
  ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton
]
