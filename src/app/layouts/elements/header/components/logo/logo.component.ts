import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'oc-client-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logo.component.html',
})
export class LogoComponent {}
