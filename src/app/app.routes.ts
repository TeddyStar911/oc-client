import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/Components/home/home.component';
import { NotFoundComponent } from './Pages/NotFound/Components/not-found/not-found.component';
import { ShopComponent } from './Pages/Shop/Components/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', component: NotFoundComponent },
];
