import { Component, Input } from '@angular/core';
import { IProject } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-project-wrapper',
  templateUrl: './project-wrapper.component.html',
  styleUrls: ['./project-wrapper.component.scss']
})
export class ProjectWrapperComponent {
  @Input()
  project!: IProject;
  showComments = false;

  toggleComments() {
    this.showComments = !this.showComments;
  }
}