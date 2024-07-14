import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideAngularSvgIcon(),
    provideHttpClient(),
    // provideCloudinaryLoader('https://cdn2.thecatapi.com/'),
  ],
};
