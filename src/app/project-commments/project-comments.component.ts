/* File: src/app/project-comments/project-comments.component.ts */
import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { IComment } from '../interfaces/project.interface';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentsService } from '../services/comments.service';
import { IProject } from '../interfaces/project.interface';

@Component({
  selector: 'app-project-comments',
  templateUrl: './project-comments.component.html',
  styleUrls: ['./project-comments.component.scss']
})
export class ProjectCommentsComponent implements OnInit {
  @ViewChild(CommentListComponent) commentList!: CommentListComponent;
  @Input() project!: IProject;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentList.comments = this.commentsService.getComments(this.project.id);
  }

  onCommentAdded(comment: IComment) {
    comment.projectId = this.project.id;
    this.commentsService.addComment(comment);
    this.commentList.comments = this.commentsService.getComments(this.project.id);
  }
}
