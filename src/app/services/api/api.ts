import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type ProjectCategory = 'system' | 'example' | 'academic';

export interface Project {
  ID: number;
  category: ProjectCategory;
  name: string | Record<string, string>;
  image: string;
  label: string;
  description: string | Record<string, string>;
  path1: string;
  path2: string;
  tags?: string;
}

export interface Course {
  ID: number;
  name: string;
  image: string;
  label: string;
  description: string;
  path1: string;
  path2: string;
}

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http = inject(HttpClient);

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('/json/projects.json');
  }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/json/courses.json').pipe( 
      map((data) => data.sort((a, b) => b.ID - a.ID))
    );
  }
}
