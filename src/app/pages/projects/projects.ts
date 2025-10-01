import { Component, OnInit, signal } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Api, Project } from '../../services/api/api';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsPage implements OnInit {
  projects = signal<Project[]>([]);
  loading = signal(true);

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
        console.log(data);
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
        this.loading.set(false);
      }
    });
  }
}
