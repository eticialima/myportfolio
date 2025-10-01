import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LanguageService, SUPPORTED_LOCALES } from '../../services/language/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcher {
  private readonly languageService = inject(LanguageService);
  
  protected isOpen = false;
  protected readonly locales = SUPPORTED_LOCALES;
  protected readonly currentLanguage = this.languageService.currentLanguage;

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(langCode: string): void {
    this.languageService.setLanguage(langCode);
    this.isOpen = false;
  }

  getCurrentLocale() {
    return this.languageService.getCurrentLocale();
  }

  getFlagPath(langCode: string): string {
    return `/icon/flag-${langCode}.png`;
  }

  // Fecha dropdown ao clicar fora
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-switcher')) {
      this.isOpen = false;
    }
  }
}
