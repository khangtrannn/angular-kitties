import { Component } from '@angular/core';
import { KittyCardComponent } from './kitty-card/kitty-card.component';

@Component({
  selector: 'app-kitty-list',
  standalone: true,
  imports: [KittyCardComponent],
  templateUrl: './kitty-list.component.html',
  styleUrl: './kitty-list.component.scss',
})
export class KittyListComponent {}
