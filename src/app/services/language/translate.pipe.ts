import { Pipe, PipeTransform, inject, ChangeDetectorRef, effect } from '@angular/core';
import { LanguageService } from './language.service';
import { translations } from './translations';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Necessário para reagir a mudanças de idioma
})
export class TranslatePipe implements PipeTransform {
  private languageService = inject(LanguageService);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    // Força detecção de mudanças quando o idioma muda
    effect(() => {
      this.languageService.currentLanguage();
      this.cdr.markForCheck();
    });
  }

  transform(key: string): string {
    const currentLang = this.languageService.currentLanguage();
    const keys = key.split('.');
    let translation: any = translations[currentLang];

    for (const k of keys) {
      if (translation && typeof translation === 'object') {
        translation = translation[k];
      } else {
        return key; // Retorna a chave se não encontrar tradução
      }
    }

    return typeof translation === 'string' ? translation : key;
  }
}
