import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  currentTime: number = 0;
  timerId: any;
  
  onStart() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = setInterval(() => this.currentTime += 1, 1000);
  }
  
  onPause() {
    clearInterval(this.timerId);
  }
  
  onReset() {
    this.currentTime = 0;
    // clearInterval(this.timerId);
    // this.timerId = null;
  }
}
