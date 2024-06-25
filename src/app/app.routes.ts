import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/components/root/home.component';
import { NotFoundComponent } from '@pages/not-found/components/root/not-found.component';
import { ShopComponent } from '@pages/shop/components/root/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', component: NotFoundComponent },
];
