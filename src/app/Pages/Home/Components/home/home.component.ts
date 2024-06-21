import { Component } from '@angular/core';
import {MainLayoutComponent} from '../../../../Layouts/Core/MainLayout/Components/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainLayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
