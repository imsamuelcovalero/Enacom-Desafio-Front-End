/* File: src/app/projects/projects.component.ts */
import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [] as IProject[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getProjetos();
  }
}
