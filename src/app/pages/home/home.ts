import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../services/language/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
