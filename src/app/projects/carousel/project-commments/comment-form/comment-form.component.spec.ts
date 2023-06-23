/* File: src/app/project-comments/comment-form/comment-form.component.spec.ts */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentFormComponent } from './comment-form.component';
import { By } from '@angular/platform-browser';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CommentFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;

    component.project = {
      id: 1,
      name: 'Projeto de Teste',
      title: 'Título do Projeto de Teste',
      description: 'Descrição do Projeto de Teste',
      image: 'caminho/para/imagem/teste.gif',
      skills: ['JavaScript', 'Angular'],
      linkApp: 'https://project-teste.vercel.app/',
      linkGitHub: 'https://github.com/holygato/Project-Teste',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit commentAdded event with form value when form is submitted and valid', () => {
    spyOn(component.commentAdded, 'emit');
    component.commentForm.setValue({ author: 'Autor de Teste', body: 'Corpo do Comentário' });
    fixture.detectChanges();

    fixture.debugElement.query(By.css('form')).triggerEventHandler('submit', null);
    expect(component.commentAdded.emit).toHaveBeenCalledWith({ author: 'Autor de Teste', body: 'Corpo do Comentário', projectId: component.project.id });
  });

  it('should emit cancel event when cancel button is clicked', () => {
    spyOn(component.cancel, 'emit');

    fixture.debugElement.query(By.css('button[type="button"]')).triggerEventHandler('click', null);
    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
