import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }
}
