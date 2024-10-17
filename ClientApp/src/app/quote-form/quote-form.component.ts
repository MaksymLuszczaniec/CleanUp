import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent {
  city: string = 'Stockholm';
  area: number = 0;
  windowCleaning: boolean = false;
  balconyCleaning: boolean = false;
  trashRemoval: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/results'], {
      queryParams: {
        city: this.city,
        area: this.area,
        windowCleaning: this.windowCleaning.toString(),  // Przekazujemy jako tekst
        balconyCleaning: this.balconyCleaning.toString(),
        trashRemoval: this.trashRemoval.toString()
      }
    });
  }
}

