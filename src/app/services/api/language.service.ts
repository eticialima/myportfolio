import { Injectable } from '@angular/core';

export const SUPPORTED_LOCALES = [
  { code: 'pt', label: 'Português' },
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },

];


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  public language: string = 'pt';

  setLanguage(lang: string) {
    this.language = lang;
  }

}
