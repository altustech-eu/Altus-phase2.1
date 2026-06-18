import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Nav } from './components/navbar';
import { FooterComponent } from './components/Footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Nav,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-white text-[#161616] font-main">
      <app-nav></app-nav>

      <main>
        <router-outlet></router-outlet>
      </main>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .font-main {
      font-family: 'IBM Plex Sans', 'Inter', Arial, Helvetica, sans-serif;
    }
  `]
})
export class AppComponent {}