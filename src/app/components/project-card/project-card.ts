import { Component, input } from '@angular/core';
import { Project } from '../../services/api/api';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  project = input.required<Project>();

  getTags(): string[] {
    const tags = this.project().tags;
    return tags ? tags.split(',').map(t => t.trim()) : [];
  }
}
