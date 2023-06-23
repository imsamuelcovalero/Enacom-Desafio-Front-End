/* File: src/app/project-comments/comment-list/comment-list.component.spec.ts */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentListComponent } from './comment-list.component';
import { IComment } from 'src/app/interfaces/project.interface';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

// Componente de teste para representar o CommentComponent
@Component({
  selector: 'app-comment',
  template: '<p>Mock Comment Component</p>'
})
class MockCommentComponent {
  @Input() comment!: IComment;
}

describe('CommentListComponent', () => {
  let component: CommentListComponent;
  let fixture: ComponentFixture<CommentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentListComponent, MockCommentComponent]  // incluído MockCommentComponent
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Ainda não foram feitos comentários." when there are no comments', () => {
    component.comments = [];
    fixture.detectChanges();
    const noCommentsElement = fixture.debugElement.query(By.css('.comment-list-section p'));
    expect(noCommentsElement.nativeElement.textContent).toEqual('Ainda não foram feitos comentários.');
  });

  it('should display CommentComponent when there are comments', () => {
    component.comments = [{
      projectId: 1,
      author: 'Autor de Teste',
      body: 'Corpo do Comentário'
    }];
    fixture.detectChanges();
    const commentElements = fixture.debugElement.queryAll(By.directive(MockCommentComponent));
    expect(commentElements.length).toEqual(1);
  });
});
