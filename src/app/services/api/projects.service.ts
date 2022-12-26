import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PortfolioItems {
	id?: number;
	name?: string;
	image?: string;
	label?: string;
	description?: string;
	path1?: string;
	path2?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public getJSON(): Observable<any> {
		return this.http.get("../../../assets/json/projects.json")
	}

  public getCourseJSON(): Observable<any> {
		return this.http.get("../../../assets/json/courses.json")
	}

  constructor(private http: HttpClient) {

		this.getJSON().subscribe(data => {
			console.log(data);
		});

    this.getCourseJSON().subscribe(data => {
			console.log(data);
		});

	}
}
