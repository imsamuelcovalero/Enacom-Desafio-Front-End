import { TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { IComment } from '../interfaces/project.interface';

describe('CommentsService', () => {
  let service: CommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsService);

    // Limpa localStorage antes de cada teste
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get comments for a project', () => {
    const comment: IComment = { projectId: 1, body: 'Test comment', author: 'Test author' };

    // Salva um comentário no localStorage
    localStorage.setItem('myPortfolioComments', JSON.stringify([comment]));

    const comments = service.getComments(1);
    expect(comments).toContain(comment);
  });

  it('should add a comment', () => {
    const comment: IComment = { projectId: 2, body: 'Another test comment', author: 'Another test author' };

    service.addComment(comment);
    const commentsJSON = localStorage.getItem('myPortfolioComments');
    const comments = commentsJSON ? JSON.parse(commentsJSON) : [];
    expect(comments).toContain(comment);
  });
});