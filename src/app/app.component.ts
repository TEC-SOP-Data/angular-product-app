import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <main class="main">
    <nav>
      <a href="/">Home</a>
      |
      <a href="/profile">Profile</a>
    </nav>
    </main>
    <router-outlet />
  `,
  imports: [RouterOutlet],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-product-app';
}
