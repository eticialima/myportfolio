import { Component, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

interface Locale {
  localeCode: string;
  label: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myportfolio';

  constructor(@Inject(LOCALE_ID) public locale: string, private router: Router) {
    console.log('locale', locale); 
   }
}
