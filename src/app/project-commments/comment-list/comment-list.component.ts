/* File: src/app/project-commments/comment-list/comment-list.component.ts */
import { Component, OnInit } from '@angular/core';
import { IComment } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: IComment[] = [];

  ngOnInit(): void {
    // sem código no momento
  }

  onCommentAdded(comment: IComment) {
    this.comments.push(comment);
  }
}