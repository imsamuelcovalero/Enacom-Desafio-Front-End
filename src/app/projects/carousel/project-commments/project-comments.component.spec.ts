/* File: src/app/project-comments/project-comments.component.spec.ts */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCommentsComponent } from './project-comments.component';
import { IProject, IComment } from '../../../interfaces/project.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CommentsService } from '../../../services/comments.service';

// Componentes de teste para representar o CommentListComponent e CommentFormComponent
@Component({
  selector: 'app-comment-list',
  template: '<p>Mock Comment List Component</p>'
})
class MockCommentListComponent {
  @Input() comments!: IComment[];
}

@Component({
  selector: 'app-comment-form',
  template: '<p>Mock Comment Form Component</p>'
})
class MockCommentFormComponent {
  @Input() project!: IProject;
  @Output() commentAdded = new EventEmitter<IComment>();
  @Output() cancel = new EventEmitter<void>();
}

describe('ProjectCommentsComponent', () => {
  let component: ProjectCommentsComponent;
  let fixture: ComponentFixture<ProjectCommentsComponent>;

  const mockCommentsService = jasmine.createSpyObj('CommentsService', ['getComments', 'addComment']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCommentsComponent, MockCommentListComponent, MockCommentFormComponent],
      providers: [{ provide: CommentsService, useValue: mockCommentsService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCommentsComponent);
    component = fixture.componentInstance;
    component.project = {
      id: 1,
      name: 'Test Project',
      title: 'Test Title',
      description: 'Test Description',
      image: 'test-image.jpg',
      skills: ['Test Skill'],
      linkApp: 'test-app',
      linkGitHub: 'test-github'
    };
    mockCommentsService.getComments.and.returnValue([]);
    component.showForm = false; // Mostra o botão "Criar Comentário"
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display CommentListComponent and CommentFormComponent correctly', () => {
    component.showForm = true;
    fixture.detectChanges();
    const commentListElement = fixture.debugElement.query(By.directive(MockCommentListComponent));
    const commentFormElement = fixture.debugElement.query(By.directive(MockCommentFormComponent));
    expect(commentListElement).toBeTruthy();
    expect(commentFormElement).toBeTruthy();
  });

  it('should display CommentFormComponent when showForm is true', () => {
    component.showForm = true;
    fixture.detectChanges();
    const commentFormElement = fixture.debugElement.query(By.directive(MockCommentFormComponent));
    expect(component.showForm).toBeTrue();
    expect(commentFormElement).toBeTruthy();
  });
});
