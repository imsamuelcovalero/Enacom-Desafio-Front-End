import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projetos = [] as IProject[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projetos = this.projectsService.getProjetos();
  }
}
