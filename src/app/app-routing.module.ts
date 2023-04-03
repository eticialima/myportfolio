import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TccComponent } from './pages/tcc/tcc.component';
import { CourseComponent } from './pages/course/course.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'about', component: AboutComponent },

  { path: 'projects', component: PortfolioComponent },

  { path: 'courses', component: CourseComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'tcc', component: TccComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
