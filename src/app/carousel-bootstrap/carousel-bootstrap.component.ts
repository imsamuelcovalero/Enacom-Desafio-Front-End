/* File: src/app/carousel-bootstrap/carousel-bootstrap.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-carousel-bootstrap',
  templateUrl: './carousel-bootstrap.component.html',
  styleUrls: ['./carousel-bootstrap.component.scss']
})
export class CarouselBootstrapComponent implements OnInit {
  @Input() projects: IProject[] = [];

  currentProjectIndex = 0;

  ngOnInit(): void {
    // sem código no momento
  }

  moveNext() {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
    }
  }

  movePrev() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    }
  }
}