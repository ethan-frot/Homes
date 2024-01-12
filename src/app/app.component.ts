import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterLink, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="logo"
            aria-hidden="true"
          />
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
// buttons.forEach((btn) => {
//   btn.addEventListener('click', function () {
//     const type = btn.dataset.type;
//     const value = btn.dataset.value;
//     console.log(type, value);
//     updateCSS(type, value);
//   });
// });

const buttons = document.querySelector('.button') as HTMLElement;
const header = document.querySelector('header') as HTMLElement;

buttons.addEventListener('click', function () {
  const type: string | undefined = buttons?.dataset['type'];
  const value: string | undefined = buttons?.dataset['value'];
  console.log(type, value);
  if (type && value) {
    updateCSS(type, value);
  }
});

const updateCSS = (type: string, value: string) => {
  switch (type) {
    case 'color':
      if (header) {
        header.style.boxShadow = `0px 5px 25px var(--${value}-shadow-color)`;
      }
      break;
  }
};
