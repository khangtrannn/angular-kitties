import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { Kitty } from '../../../shared/models/kitty';

@Component({
  selector: 'app-kitty-card',
  standalone: true,
  imports: [SvgIconComponent, NgOptimizedImage],
  templateUrl: './kitty-card.component.html',
  styleUrl: './kitty-card.component.scss',
})
export class KittyCardComponent {
  kitty = input.required<Kitty>();
  breed = computed(() => this.kitty().breeds[0]);
  temperaments = computed(() => this.breed().temperament.split(','));
  country = computed(() => `fi fi-${this.breed().country_code.toLowerCase()}`);
}
