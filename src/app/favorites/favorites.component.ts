import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  template: '<img class="heart" src="../assets/heart.svg" />',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {}
