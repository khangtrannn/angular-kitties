import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="max-w-[1440px]">
      <app-header />

      <div class="pt-6 px-6">
        <router-outlet />
      </div>
    </div>
  `,
})
export class AppComponent {}
