import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/api/projects.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  list_course_data: any[] = [];

	constructor(private projetoservice: ProjectsService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.projetoservice.getCourseJSON().subscribe(data => {
			console.log(data);
			this.list_course_data = data;
		});
  }
}
