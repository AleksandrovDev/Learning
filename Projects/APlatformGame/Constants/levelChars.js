import { Player } from '../Classes/Player.js';
import { Coin } from '../Classes/Coin.js';
import { Lava } from '../Classes/Lava.js';

export let levelChars = {
  '.': 'empty',
  '#': 'wall',
  '+': 'lava',
  '@': Player,
  'o': Coin,
  '=': Lava,
  '|': Lava,
  'v': Lava
}