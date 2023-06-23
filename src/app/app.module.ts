import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SearchBarComponent } from './helpers/search-bar/search-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProjectComponent } from './project/project.component';
import { CarouselBootstrapComponent } from './carousel-bootstrap/carousel-bootstrap.component';
import { ProjectCommentsComponent } from './project-commments/project-comments.component';
import { CommentListComponent } from './project-commments/comment-list/comment-list.component';
import { CommentFormComponent } from './project-commments/comment-form/comment-form.component';
import { CommentComponent } from './project-commments/comment/comment.component';
import { ProjectWrapperComponent } from './carousel/project-wrapper/project-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencesComponent,
    SearchBarComponent,
    CoursesComponent,
    LanguagesComponent,
    ProjectsComponent,
    CarouselComponent,
    ProjectComponent,
    CarouselBootstrapComponent,
    ProjectCommentsComponent,
    CommentListComponent,
    CommentFormComponent,
    CommentComponent,
    ProjectWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    CarouselModule,
    MatToolbarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
