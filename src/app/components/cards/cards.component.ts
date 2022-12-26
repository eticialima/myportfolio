import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {


  @Input() cardItems = [
    {
      "ID": 1,
      "name": "Django Sistema Inteligente QA Forum (code)",
      "image": "/img-1.jpg",
      "label": "Django",
      "description": "Lorem Ibisum dolor sit amet, consectetur adipiscing elit",
      "path1": "https://youtu.be/f4FY0Ccu8FY",
      "path2": "https://youtu.be/f4FY0Ccu8FY"
    },
    {
      "ID": 2,
      "name": "Django Blog completo com várias funcionalidades",
      "image": "/img-5.jpg",
      "label": "Django",
      "description": "Lorem Ibisum dolor sit amet, consectetur adipiscing elit",
      "path1": "https://youtu.be/stFbzz_4f4w",
      "path2": "https://youtu.be/stFbzz_4f4w"
    },
    {
      "ID": 3,
      "name": "Consumindo API no Wix",
      "image": "/img-2.jpg",
      "label": "Django",
      "description": "Lorem Ibisum dolor sit amet, consectetur adipiscing elit",
      "path1": "https://www.youtube.com/watch?v=yEl1DVuO8R4&t=14s",
      "path2": "https://www.youtube.com/watch?v=yEl1DVuO8R4&t=14s"
    },
    {
      "ID": 5,
      "name": "Wix Velo Menu Tags Filters (Code)",
      "image": "/img-4.jpg",
      "label": "Wix",
      "description": "Lorem Ibisum dolor sit amet, consectetur adipiscing elit",
      "path1": "https://www.youtube.com/watch?v=qg_953h1pTI",
      "path2": "https://www.youtube.com/watch?v=qg_953h1pTI"
    }
  ]
  @Output() item_click = new EventEmitter();
  
  constructor() { }

	ngOnInit(): void { }

  click_row(item) {
		this.item_click.emit(item);
	}

}
