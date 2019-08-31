import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  rates: string[] = []; // coming from icon names

  constructor() {}

  ngOnInit() {
    this.calculateRates(Number(this.rating));
  }

  // we calculate rate by approximation, and give it icon id
  calculateRates(rating: number) {
    this.rates = [];
    for (let i = 0; i < 5; i++) {
      if (rating <= i * 2) {
        this.rates.push('star_border');
      } else if (rating >= i * 2 + 2) {
        this.rates.push('star');
      } else {
        this.rates.push('star_half');
      }
    }
  }
}
