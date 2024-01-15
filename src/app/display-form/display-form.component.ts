import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { RouterModule } from '@angular/router';
import { HousingLocation } from '../housing-location/housing-location.component';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css'],
})
export class DisplayFormComponent {
  formData: {
    name: string;
    city: string;
    state: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
  } = {
    name: '',
    city: '',
    state: '',
    availableUnits: 0,
    wifi: false,
    laundry: false,
  };

  constructor(private housingService: HousingService) {}

  displayNone() {
    const form = document.querySelector('.form') as HTMLElement;

    form.style.display = 'none';
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const newLocation: HousingLocation = {
      id: this.housingService.getAllHousingLocations().length + 1,
      name: this.formData.name,
      city: this.formData.city,
      state: this.formData.state,
      photo: 'https://source.unsplash.com/featured/800x600/?apartment',
      availableUnits: this.formData.availableUnits,
      wifi: this.formData.wifi,
      laundry: this.formData.laundry,
      // lat: 22.334,
      // lng: 45.4313,
    };

    console.log('New Location Data:', newLocation);

    this.displayNone();

    // this.housingService.addHousingLocation(newLocation);
  }
}
