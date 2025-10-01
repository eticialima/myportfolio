import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from './components/top-menu/top-menu';
import { Footer } from './components/footer/footer';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenu, Footer, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
