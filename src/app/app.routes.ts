import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home - AJ's Robo Shop" },
  // {
  //   path: 'catalog/:filter',
  //   component: CatalogComponent,
  //   title: "Catalog - AJ's Robo Shop",
  // },
  {
    path: 'catalog',
    component: CatalogComponent,
    title: "Catalog - AJ's Robo Shop",
  },
  { path: 'cart', component: CartComponent, title: "Cart - AJ's Robo Shop" },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
