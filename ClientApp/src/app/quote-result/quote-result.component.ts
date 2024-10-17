import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-result',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './quote-result.component.html'
})
export class QuoteResultComponent implements OnInit {
  city: string = '';
  area: number = 0;
  windowCleaning: boolean = false;
  balconyCleaning: boolean = false;
  trashRemoval: boolean = false;
  totalCost: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      this.area = +params['area'];
      this.windowCleaning = params['windowCleaning'] === 'true';
      this.balconyCleaning = params['balconyCleaning'] === 'true';
      this.trashRemoval = params['trashRemoval'] === 'true';

      this.calculateCost();
    });
  }

  calculateCost() {
    const baseRate = this.city === 'Stockholm' ? 65 : 55;
    this.totalCost = baseRate * this.area;

    if (this.windowCleaning) this.totalCost += 300;
    if (this.balconyCleaning) this.totalCost += 150;
    if (this.trashRemoval && this.city === 'Uppsala') this.totalCost += 400;
  }
}
