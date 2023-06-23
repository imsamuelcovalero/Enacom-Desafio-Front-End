/* File: src/app/project-comments/project-comments.component.ts */
import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../interfaces/project.interface';
import { CommentsService } from '../../services/comments.service';
import { IProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-project-comments',
  templateUrl: './project-comments.component.html',
  styleUrls: ['./project-comments.component.scss']
})
export class ProjectCommentsComponent implements OnInit {
  @Input() project!: IProject;
  comments: IComment[] = [];
  showForm = false; // Formulário não será mostrado por padrão

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.comments = this.commentsService.getComments(this.project.id);
    this.showForm = this.comments.length === 0; // Mostra o formulário se não houver comentários
  }

  onCommentAdded(comment: IComment) {
    comment.projectId = this.project.id;
    this.commentsService.addComment(comment);
    this.comments = this.commentsService.getComments(this.project.id);
    this.showForm = false; // Esconde o formulário após o envio do comentário
  }

  onCancel() {
    this.showForm = false; // Esconde o formulário quando o botão 'Cancelar' é clicado
  }
}