import { State } from "./State.js";
import { Vec } from "./Vec.js";

export class Monster {
  static id = 0;
  constructor(pos, speed, reset) {
    this.pos = pos;
    this.speed = speed;
    this.reset = reset;
    this.id = Monster.id++;
  }

  get type() {
    return "monster";
  }

  static create(pos) {
    return new Monster(pos.plus(new Vec(0, -1)), new Vec(-4, 0));
  }

  update(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
      return new Monster(newPos, this.speed);
    } else {
      return new Monster(this.pos, this.speed.times(-1));
    }
  }

  collide(state) {
    const [player] = state.actors.filter((actor) => actor.type == "player");

    const monsterX = Math.floor(this.pos.x - this.size.x);
    const monsterY = Math.ceil(this.pos.y - this.size.y);
    const playerX = Math.ceil(player.pos.x - player.size.x);
    const playerY = Math.floor(player.pos.y - player.size.y);

    if (monsterY > playerY && Math.abs(monsterX - playerX) <= 2) {
      console.log(state.actors);
      const index = state.actors.filter((actor) => actor.id == this.id);
      state.actors.splice(state.actors.indexOf(this), 1);
      return new State(state.level, state.actors, "playing");
    }
    return new State(state.level, state.actors, "lost");
  }
}

Monster.prototype.size = new Vec(1.2, 2);
