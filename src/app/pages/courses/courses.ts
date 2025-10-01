import { Component, OnInit, signal } from '@angular/core';
import { Api, Course } from '../../services/api/api';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-courses',
  imports: [CourseCard],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class CoursesPage implements OnInit {
  courses = signal<Course[]>([]);
  loading = signal(true);

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getCourses().subscribe({
      next: (data) => {
        this.courses.set(data);
        this.loading.set(false);
        console.log('Cursos carregados:', data);
      },
      error: (err) => {
        console.error('Erro ao carregar cursos:', err);
        this.loading.set(false);
      }
    });
  }
}
