import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFormComponent } from '../display-form/display-form.component';

@Component({
  selector: 'app-add-houses',
  standalone: true,
  imports: [CommonModule, DisplayFormComponent],
  templateUrl: './add-houses.component.html',
  styleUrl: './add-houses.component.css',
})
export class AddHousesComponent {
  displayForm() {}
  // constructor(
  //   public name: string,
  //   public city: string,
  //   public state: string,
  //   public availableUnits: number,
  //   public wifi: boolean,
  //   public laundry: boolean
  // ) {}
}
