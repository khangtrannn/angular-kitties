import { Component } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-kitty-card',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './kitty-card.component.html',
  styleUrl: './kitty-card.component.scss',
})
export class KittyCardComponent {}
