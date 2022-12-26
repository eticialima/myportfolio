import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TccComponent } from './pages/tcc/tcc.component';
import { CardsComponent } from './components/cards/cards.component';
import { CourseComponent } from './pages/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    TopMenuComponent,
    CardsComponent,
    PortfolioComponent,
    TccComponent,
    CourseComponent,
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
