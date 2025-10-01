import { Injectable, signal } from '@angular/core';

export interface Locale {
  readonly code: string;
  readonly label: string;
  readonly icon: string;
}

export const SUPPORTED_LOCALES: Locale[] = [
  { code: 'pt', label: 'Português', icon: 'language' },
  { code: 'en', label: 'English', icon: 'language' },
  { code: 'es', label: 'Español', icon: 'language' },
];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'preferred-language';
  
  // Signal para reatividade
  public currentLanguage = signal<string>('pt');

  constructor() {
    this.loadLanguage();
  }

  /**
   * Carrega o idioma salvo ou usa o padrão (pt)
   */
  private loadLanguage(): void {
    const savedLang = localStorage.getItem(this.STORAGE_KEY);
    
    if (savedLang && this.isValidLanguage(savedLang)) {
      this.currentLanguage.set(savedLang);
    } else {
      // Tenta detectar o idioma do navegador
      const browserLang = this.detectBrowserLanguage();
      this.currentLanguage.set(browserLang);
      this.saveLanguage(browserLang);
    }
  }

  /**
   * Detecta o idioma do navegador
   */
  private detectBrowserLanguage(): string {
    const browserLang = navigator.language.split('-')[0]; // ex: 'pt-BR' -> 'pt'
    return this.isValidLanguage(browserLang) ? browserLang : 'pt';
  }

  /**
   * Verifica se o idioma é suportado
   */
  private isValidLanguage(lang: string): boolean {
    return SUPPORTED_LOCALES.some(locale => locale.code === lang);
  }

  /**
   * Salva o idioma no localStorage
   */
  private saveLanguage(lang: string): void {
    localStorage.setItem(this.STORAGE_KEY, lang);
  }

  /**
   * Define o idioma atual
   */
  setLanguage(lang: string): void {
    if (this.isValidLanguage(lang)) {
      this.currentLanguage.set(lang);
      this.saveLanguage(lang);
    }
  }

  /**
   * Retorna o idioma atual
   */
  getLanguage(): string {
    return this.currentLanguage();
  }

  /**
   * Retorna todos os idiomas suportados
   */
  getSupportedLocales(): Locale[] {
    return SUPPORTED_LOCALES;
  }

  /**
   * Retorna o locale atual completo
   */
  getCurrentLocale(): Locale | undefined {
    return SUPPORTED_LOCALES.find(locale => locale.code === this.currentLanguage());
  }
}
