import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./features/projects/projects').then(m => m.ProjectsComponent) },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];