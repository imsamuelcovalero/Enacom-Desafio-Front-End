import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ExtraOptions } from '@angular/router';
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
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SearchBarComponent } from './helpers/search-bar/search-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent } from './projects/carousel/carousel.component';
import { ProjectComponent } from './projects/carousel/project/project.component';
import { ProjectWrapperComponent } from './projects/carousel/project-wrapper/project-wrapper.component';
import { ProjectCommentsComponent } from './projects/carousel/project-commments/project-comments.component';
import { CommentListComponent } from './projects/carousel/project-commments/comment-list/comment-list.component';
import { CommentFormComponent } from './projects/carousel/project-commments/comment-form/comment-form.component';
import { CommentComponent } from './projects/carousel/project-commments/comment/comment.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

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
    ProjectCommentsComponent,
    CommentListComponent,
    CommentFormComponent,
    CommentComponent,
    ProjectWrapperComponent,
    ContactPageComponent,
    FooterComponent,
    HomeComponent,
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
    NgbModule,
    // MatSnackBarModule,
    HttpClientModule,
    MatTooltipModule,
    RouterModule.forRoot([], routerOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
