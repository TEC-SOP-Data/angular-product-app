import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', component: ProductListComponent },
  { path: 'profile', component: ProfileComponent } // Profilside
];


// Hvis du har mange sider, kan de vises sådan i her:
// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { ProfileComponent } from './profile/profile.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent }, // Startside
//   { path: 'products', component: ProductsComponent }, // Produktside
//   { path: 'about', component: AboutComponent }, // Om os
//   { path: 'contact', component: ContactComponent }, // Kontakt
//   { path: 'profile', component: ProfileComponent } // Profilside
// ];


// og i appConfig.component.html:
// <nav>
//   <a routerLink="/">Hjem</a>
//   <a routerLink="/products">Produkter</a>
//   <a routerLink="/about">Om os</a>
//   <a routerLink="/contact">Kontakt</a>
//   <a routerLink="/profile">Profil</a>
// </nav>

// <!-- Her vil de forskellige sider blive vist -->
// <router-outlet></router-outlet>
