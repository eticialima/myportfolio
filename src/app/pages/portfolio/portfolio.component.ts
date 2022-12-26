import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/api/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  list_project_data: any[] = [];

	constructor(private projetoservice: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }


  getProjects() {
    this.projetoservice.getJSON().subscribe(data => {
			console.log(data);
			this.list_project_data = data;
		});
  }
}
