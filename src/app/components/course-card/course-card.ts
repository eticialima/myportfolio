import { Component, input } from '@angular/core';
import { Course } from '../../services/api/api';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {
  course = input.required<Course>();
}
