import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'oc-client-header-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-menu.component.html',
})
export class HeaderMenuComponent {}
