import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main class="main">
    <header>
  <nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/products">Projekter</a></li>
      <li><a routerLink="/companies">Karrieredag</a></li>
      <li><a href="#">Om</a></li>
    </ul>
  </nav>
</header>

    <!-- <nav>
        <button routerLink="/" class="btn btn-primary">Profile</button>
        &nbsp;
        <button routerLink="/products" class="btn btn-primary">Products</button>
      </nav> -->
    </main>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, RouterModule],  // Ensure RouterModule is imported
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-product-app';
}
