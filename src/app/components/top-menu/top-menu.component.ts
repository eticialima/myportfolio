import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface Locale {
  code: string;
  label: string;
}

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  locales: Locale[] = [
    { code: 'pt', label: '🇧🇷' },
    { code: 'en', label: '🇺🇸' },
    { code: 'fr', label: '🇫🇷' },
  ];

  constructor(private router: Router,@Inject(LOCALE_ID) public locale: string) { }

  ngOnInit(): void { }

  onChangeLang(event: any) {
    const lang = event.target.value;
    window.location.href='/'+lang;
  }

  home() {
		this.router.navigate(['/']);
	}

	about() {
		this.router.navigate(['/about']);
	}

	projects() {
		this.router.navigate(['/projects']);
	}

  courses() {
		this.router.navigate(['/courses']);
	}

  contact() {
		this.router.navigate(['/contact']);
	}

}
