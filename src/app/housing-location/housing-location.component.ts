// housing-location.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites.component';
import { DeleteHousesComponent } from '../delete-houses/delete-houses.component';

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule, FavoritesComponent, DeleteHousesComponent],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <div class="listing-header">
        <h2 class="listing-heading">{{ housingLocation.name }}</h2>
        <app-favorites></app-favorites>
      </div>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      <app-delete-houses class="icon"></app-delete-houses>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
