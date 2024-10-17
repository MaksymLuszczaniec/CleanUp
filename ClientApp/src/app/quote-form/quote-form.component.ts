import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
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
  area: number | null = null;  // setting the field to null at the beginning of validation
  windowCleaning: boolean = false;
  balconyCleaning: boolean = false;
  trashRemoval: boolean = false;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {  // Checking whether the form is valid validation
      this.router.navigate(['/results'], {
        queryParams: {
          city: this.city,
          area: this.area,
          windowCleaning: this.windowCleaning,
          balconyCleaning: this.balconyCleaning,
          trashRemoval: this.trashRemoval
        }
      });
    }
  }
}


