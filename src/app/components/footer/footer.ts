import { Component } from '@angular/core';  
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected currentYear = new Date().getFullYear();
}
