import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
export class TopMenu {
  protected isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}
