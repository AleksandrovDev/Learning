'use strict'

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() {
    alert( this. step );
  }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();

let chainLadder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert(this.step);
    return this;
  },
};

chainLadder.up().up().showStep();