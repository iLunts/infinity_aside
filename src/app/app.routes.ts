import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':company',
    loadComponent: () =>
      import('./entity/entity.component').then((m) => m.EntityComponent),
    children: [
      {
        path: ':suburb',
        loadComponent: () =>
          import('./entity/entity.component').then((m) => m.EntityComponent),
        children: [
          {
            path: ':person',
            loadComponent: () =>
              import('./entity/entity.component').then(
                (m) => m.EntityComponent
              ),
          },
        ],
      },
    ],
  },
];
