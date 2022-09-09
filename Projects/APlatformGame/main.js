import DOMDisplay from './Classes/DOMDisplay.js';
import { CanvasDisplay } from './Classes/CanvasDisplay.js';
import { GAME_LEVELS } from './Constants/gameLevels.js';
import { runGame } from './gameHelper.js';

runGame(GAME_LEVELS, CanvasDisplay);

