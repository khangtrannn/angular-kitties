import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () =>
      (await import('./features/cat-list/cat-list.component')).CatListComponent,
  },
];
