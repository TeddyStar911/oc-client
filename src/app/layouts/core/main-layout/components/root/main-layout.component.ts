import { Component } from '@angular/core';
import { HeaderComponent } from '@layouts/elements/header/components/root/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@layouts/elements/footer/components/root/footer.component';

@Component({
  selector: 'oc-client-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
