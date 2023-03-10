const myModule = require('./clock');

class ExtendedClock extends myModule.Clock {
  constructor({template, precision}) {
    super({template});
    this.precision = precision || 1000;
    // let {precision = 1000} = options;
  }
  
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000
});

lowResolutionClock.start();