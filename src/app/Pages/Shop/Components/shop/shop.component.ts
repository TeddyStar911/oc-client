import { Component } from '@angular/core';
import {MainLayoutComponent} from '../../../../Layouts/Core/MainLayout/Components/main-layout/main-layout.component';

@Component({
  selector: 'app-shop',
  standalone: true,
    imports: [
        MainLayoutComponent
    ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
