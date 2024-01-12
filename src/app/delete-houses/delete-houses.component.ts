import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-delete-houses',
  standalone: true,
  imports: [HomeComponent],
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

  constructor(private el: ElementRef) {}

  confirmDeletion(): void {
    if (confirm('Do you want to delete this housing location?')) {
      const nativeElement = this.el.nativeElement;
      const parentElement = nativeElement.closest('.listing');
      if (parentElement) {
        parentElement.style.display = 'none';
      }
    }
  }
}
