/* File: src/app/project/project.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input()
  project!: IProject;

  showComments = false;

  ngOnInit(): void {
    // sem código no momento
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }
}
