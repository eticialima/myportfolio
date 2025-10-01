import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink, RouterLinkActive, LanguageSwitcher, TranslatePipe],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
  protected isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
