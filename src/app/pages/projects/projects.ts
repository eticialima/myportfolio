import { Component, OnInit, computed, signal } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { Api, Project } from '../../services/api/api';
import { TranslatePipe } from '../../services/language/translate.pipe';

type ProjectFilter = 'all' | 'systems' | 'examples';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsPage implements OnInit {
  projects = signal<Project[]>([]);
  loading = signal(true);
  activeFilter = signal<ProjectFilter>('all');
  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.projects();
    if (filter === 'systems') {
      return this.projects().filter(project => project.category === 'system' || project.category === 'academic');
    }
    return this.projects().filter(project => project.category === 'example');
  });

  filters: { value: ProjectFilter; label: string }[] = [
    { value: 'all', label: 'projects.filters.all' },
    { value: 'systems', label: 'projects.filters.systems' },
    { value: 'examples', label: 'projects.filters.examples' }
  ];

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getProjects().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar projetos:', err);
        this.loading.set(false);
      }
    });
  }
}
