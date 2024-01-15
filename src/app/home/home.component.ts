import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { AppComponent } from '../app.component';
import { AddHousesComponent } from '../add-houses/add-houses.component';
import { DisplayFormComponent } from '../display-form/display-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    AddHousesComponent,
    DisplayFormComponent,
    AppComponent,
  ],
  template: `
    <section class="bar">
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
      <div class="actions" id="colors">
        <div data-value="light" data-type="color" class="button"></div>
        <div data-value="dark" data-type="color" class="button"></div>
      </div>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
      <app-add-houses></app-add-houses>
      <app-display-form></app-display-form>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.setupButtonClickListeners();
  }

  private setupButtonClickListeners(): void {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const type: string | null = btn?.getAttribute('data-type');
        const value: string | null = btn?.getAttribute('data-value');
        if (type && value) {
          this.updateCSS(type, value);
        }
      });
    });
  }

  private updateCSS(type: string, value: string): void {
    const header = document.querySelector('header') as HTMLElement;
    const button = document.querySelector('button') as HTMLElement;
    const brandName = document.querySelector('.brand-name') as HTMLElement;
    const sections = document.querySelectorAll(
      'section'
    ) as NodeListOf<HTMLElement>;
    const textInput = document.querySelector(
      'input[type="text"]'
    ) as HTMLElement;
    const listings = document.querySelectorAll(
      '.listing'
    ) as NodeListOf<HTMLElement>;
    const listingHeadings = document.querySelectorAll(
      '.listing-heading'
    ) as NodeListOf<HTMLElement>;
    const listingA = document.querySelectorAll(
      'section.listing a'
    ) as NodeListOf<HTMLElement>;
    const listingFeatures = document.querySelectorAll(
      '.listing-features > .section-heading'
    ) as NodeListOf<HTMLElement>;
    const labels = document.querySelectorAll(
      'label'
    ) as NodeListOf<HTMLElement>;
    const btns = document.querySelectorAll(
      'button.primary'
    ) as NodeListOf<HTMLElement>;

    switch (type) {
      case 'color':
        brandName.style.boxShadow = `0px 5px 25px var(--${value}-shadow-color)`;
        button.style.border = `solid 1px var(--${value}-primary-color)`;
        button.style.background = `var(--${value}-primary-color)`;
        textInput.style.border = `solid 1px var(--;${value}-primary-color)`;
        brandName.style.background = `var(--${value}-background-color)`;
        sections.forEach((section) => {
          section.style.background = `var(--${value}-background-color)`;
        });
        listingHeadings.forEach((heading) => {
          heading.style.color = `var(--${value}-primary-color)`;
        });
        listings.forEach((listing) => {
          listing.style.background = `var(--${value}-accent-color)`;
        });
        listingA.forEach((a) => {
          a.style.color = `var(--${value}-primary-color)`;
        });
        listingFeatures.forEach((feature) => {
          feature.style.color = `var(--${value}-secondary-color)`;
        });
        labels.forEach((label) => {
          label.style.color = `var(--${value}-secondary-color)`;
        });
        btns.forEach((btn) => {
          btn.style.border = `var(--${value}-primary-color)`;
          btn.style.background = `var(--${value}-primary-color)`;
        });
        break;
    }
  }
}
