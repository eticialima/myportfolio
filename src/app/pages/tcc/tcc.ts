import { Component } from '@angular/core';
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-tcc',
  imports: [TranslatePipe],
  templateUrl: './tcc.html',
  styleUrl: './tcc.scss'
})
export class TccPage {
}
