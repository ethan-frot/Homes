import { Component } from '@angular/core';
import { AddHousesComponent } from '../add-houses/add-houses.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-form',
  standalone: true,
  imports: [CommonModule, AddHousesComponent],
  templateUrl: './display-form.component.html',
  styleUrl: './display-form.component.css',
})
export class DisplayFormComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
