import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./features/kitty-list/kitty-list.component'))
        .KittyListComponent,
  },
];
