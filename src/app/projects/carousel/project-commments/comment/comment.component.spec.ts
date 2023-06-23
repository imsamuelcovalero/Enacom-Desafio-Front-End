import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;

    // Adicione um comentário mock
    component.comment = {
      projectId: 1,
      body: "Este é um comentário de teste",
      author: "Autor de Teste"
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display comment body', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.comment-body').textContent).toContain('Este é um comentário de teste');
  });

  it('should display author name', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.comment-author').textContent).toContain('Autor de Teste');
  });
});