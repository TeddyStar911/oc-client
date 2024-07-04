import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'oc-client-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() classes?: string;
}
