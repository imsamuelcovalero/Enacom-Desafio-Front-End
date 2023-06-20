import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: {
    institution: string,
    course: string,
    status: string,
    period: string,
    skills: string[]
  }[] = [];
  searchTerm: any;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  applySearch(term: string): void {
    this.courses = this.coursesService.getCourses().filter(course =>
      course.institution.toLowerCase().includes(term.toLowerCase()) ||
      course.course.toLowerCase().includes(term.toLowerCase()) ||
      course.status.toLowerCase().includes(term.toLowerCase()) ||
      course.period.toLowerCase().includes(term.toLowerCase()) ||
      course.skills.some(skill => skill.toLowerCase().includes(term.toLowerCase()))
    );
  }
}