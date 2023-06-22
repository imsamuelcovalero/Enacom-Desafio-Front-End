/* File: src/app/project-commments/comment/comment.component.ts */
import { Component, OnInit, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment!: IComment;

  ngOnInit(): void {
    // sem código no momento
  }
}