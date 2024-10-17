import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteResultComponent } from './quote-result/quote-result.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', component: QuoteFormComponent },
      { path: 'results', component: QuoteResultComponent }
    ])
  ]
};


