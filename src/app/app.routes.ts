import { Routes } from '@angular/router';

export const routes: Routes = [
  
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },

  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutPage) },

  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsPage) },

  { path: 'courses', loadComponent: () => import('./pages/courses/courses').then(m => m.CoursesPage) },

  { path: 'tcc', loadComponent: () => import('./pages/tcc/tcc').then(m => m.TccPage) },

  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage) },

  { path: '**', redirectTo: '' }

];
