import { Component, input, inject, computed } from '@angular/core';
import { Course } from '../../services/api/api';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {
  private languageService = inject(LanguageService);
  
  course = input.required<Course>();
  
  // Pega o nome no idioma atual
  getCourseName(): string {
    const course = this.course();
    const lang = this.languageService.currentLanguage();
    
    // Se name for um objeto com idiomas, pega o idioma atual
    if (typeof course.name === 'object') {
      return course.name[lang] || course.name['pt'];
    }
    
    // Se for string simples, retorna direto
    return course.name;
  }
  
  // Pega a descrição no idioma atual
  getCourseDescription(): string {
    const course = this.course();
    const lang = this.languageService.currentLanguage();
    
    // Se description for um objeto com idiomas, pega o idioma atual
    if (typeof course.description === 'object') {
      return course.description[lang] || course.description['pt'];
    }
    
    // Se for string simples, retorna direto
    return course.description;
  }
}
