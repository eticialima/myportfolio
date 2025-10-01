import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutPage {
}
