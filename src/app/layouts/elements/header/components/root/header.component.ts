import { Component } from '@angular/core';
import { CartComponent } from '@layouts/elements/header/components/cart/cart.component';
import { LogoComponent } from '@layouts/elements/header/components/logo/logo.component';
import { HeaderMenuComponent } from '@layouts/elements/header/components/header-menu/header-menu.component';

@Component({
  selector: 'oc-client-header',
  standalone: true,
  imports: [CartComponent, LogoComponent, HeaderMenuComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
