import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

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
  {path:'form-controls',component:TemplateFormControlsComponent,title:"Form Controls - AJ's Robo Shop"},
  {
    path: 'sign-in',
    component: SignInComponent,
    title: "Sign In - AJ's Robo Shop",
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
