import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="bar">
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <div class="actions" id="colors">
        <div data-value="light" data-type="color" class="button"></div>
        <div data-value="dark" data-type="color" class="button"></div>
      </div>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  ngOnInit(): void {
    this.setupButtonClickListeners();
  }

  private setupButtonClickListeners(): void {
    const buttons = document.querySelectorAll('.button');
    console.log(buttons, 'hello');

    if (buttons.length === 0) {
      console.warn('No buttons with class "button" found.');
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const type: string | null = btn?.getAttribute('data-type');
        const value: string | null = btn?.getAttribute('data-value');
        console.log(type, value);
        if (type && value) {
          this.updateCSS(type, value);
        }
      });
    });
  }

  private updateCSS(type: string, value: string): void {
    const header = document.querySelector('header') as HTMLElement;

    switch (type) {
      case 'color':
        if (header) {
          header.style.boxShadow = `0px 5px 25px var(--${value}-shadow-color)`;
        }
        break;
    }
  }
}
