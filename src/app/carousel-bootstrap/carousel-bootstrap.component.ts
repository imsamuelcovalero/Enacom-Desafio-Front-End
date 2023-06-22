/* File: src/app/carousel-bootstrap/carousel-bootstrap.component.ts */
import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../interfaces/project.interface';
import {
  trigger,
  // state,
  style,
  animate,
  transition,
  // animation,
} from '@angular/animations';

@Component({
  selector: 'app-carousel-bootstrap',
  templateUrl: './carousel-bootstrap.component.html',
  styleUrls: ['./carousel-bootstrap.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ])
    ])
  ]
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
    } else {
      // Quando chegar no fim, volta para o início
      this.currentProjectIndex = 0;
    }
  }

  movePrev() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    } else {
      // Quando chegar no início, vai para o fim
      this.currentProjectIndex = this.projects.length - 1;
    }
  }

  goToSlide(index: number) {
    this.currentProjectIndex = index;
  }
}