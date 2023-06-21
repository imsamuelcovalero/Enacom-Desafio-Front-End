import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'languages', component: LanguagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
