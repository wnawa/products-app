import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {LoginComponent} from './Login/Login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'aboutus', component: AboutusComponent },
  
];
