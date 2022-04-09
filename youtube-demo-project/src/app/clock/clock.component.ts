import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {
  currentTime: number = 0;
  private interval: any;

  onClickStart() {
    this.interval = setInterval(() => {
      this.currentTime += 1;
    },1000)
  };
  
  onClickMinusTwoSeconds() {
    this.currentTime -= 2;
  };

  addFive() {
    this.currentTime += 5;
  };
}
