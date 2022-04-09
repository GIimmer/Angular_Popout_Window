import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-random-color-generator',
  templateUrl: './random-color-generator.component.html',
  styleUrls: ['./random-color-generator.component.scss']
})
export class RandomColorGeneratorComponent {
  color: string;
  darkRoute: boolean;

  constructor(route: ActivatedRoute) {
    this.darkRoute = !!route.snapshot.data['dark'];

    this.color = this.getRandomColor();
  }

  getRandomColor() {
    const letters = this.darkRoute ? '01234567' : '89ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }
}
