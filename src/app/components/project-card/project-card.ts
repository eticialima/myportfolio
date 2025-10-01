import { Component, input, inject, computed } from '@angular/core';
import { Project } from '../../services/api/api';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  private languageService = inject(LanguageService);
  
  project = input.required<Project>();

  // Pega o nome no idioma atual
  getProjectName(): string {
    const project = this.project();
    const lang = this.languageService.currentLanguage();
    
    // Se name for um objeto com idiomas, pega o idioma atual
    if (typeof project.name === 'object') {
      return project.name[lang] || project.name['pt'];
    }
    
    // Se for string simples, retorna direto
    return project.name;
  }
  
  // Pega a descrição no idioma atual
  getProjectDescription(): string {
    const project = this.project();
    const lang = this.languageService.currentLanguage();
    
    // Se description for um objeto com idiomas, pega o idioma atual
    if (typeof project.description === 'object') {
      return project.description[lang] || project.description['pt'];
    }
    
    // Se for string simples, retorna direto
    return project.description;
  }

  getTags(): string[] {
    const tags = this.project().tags;
    return tags ? tags.split(',').map(t => t.trim()) : [];
  }
}
