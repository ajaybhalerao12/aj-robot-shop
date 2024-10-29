import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CartComponent } from "./cart/cart.component";
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    CartComponent,
    TemplateFormControlsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
