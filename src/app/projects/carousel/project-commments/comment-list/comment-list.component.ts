/* File: src/app/project-commments/comment-list/comment-list.component.ts */
import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input() comments: IComment[] = [];

  ngOnInit(): void {
    // sem código no momento
  }
}