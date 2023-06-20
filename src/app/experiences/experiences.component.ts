import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: { company: string, location: string, role: string, duration: string, description: string }[] = [];
  searchTerm: any;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperiences();
  }

  applySearch(term: string): void {
    this.experiences = this.experienceService.getExperiences().filter(experience =>
      experience.company.toLowerCase().includes(term.toLowerCase()) ||
      experience.location.toLowerCase().includes(term.toLowerCase()) ||
      experience.role.toLowerCase().includes(term.toLowerCase()) ||
      experience.duration.toLowerCase().includes(term.toLowerCase()) ||
      experience.description.toLowerCase().includes(term.toLowerCase())
    );
  }
}
