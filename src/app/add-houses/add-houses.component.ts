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
  displayFlex() {
    const form = document.querySelector('.form') as HTMLElement;

    form.style.display = 'flex';
  }

  onClick() {
    this.displayFlex();
  }
}
