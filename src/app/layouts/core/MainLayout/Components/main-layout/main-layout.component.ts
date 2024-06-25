import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../Elements/Header/Components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../../Elements/Footer/Components/footer/footer.component';

@Component({
  selector: 'oc-client-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
