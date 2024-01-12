import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-delete-houses',
  standalone: true,
  imports: [],
  templateUrl: './delete-houses.component.html',
  styleUrls: ['./delete-houses.component.css'],
  template: `
    <div class="delete">
      <img class="icon" src="/assets/trash-can.svg" />
    </div>
  `,
})
export class DeleteHousesComponent {
  @Input() housingLocation!: HousingLocation;

  confirmDeletion(): void {
    var result = confirm('Do you want to delete the result?');
  }
}
