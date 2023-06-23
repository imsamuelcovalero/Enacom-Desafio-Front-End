/* File: src/app/project-commments/comment-form/comment-form.component.ts */
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProject } from 'src/app/interfaces/project.interface';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Output() commentAdded = new EventEmitter<{ author: string, body: string, projectId: number }>();
  @Output() cancel = new EventEmitter<void>();
  @Input() project!: IProject;
  commentForm!: FormGroup;

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      'author': new FormControl(null),  // campo opcional
      'body': new FormControl(null, Validators.required)  // campo obrigatório
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      console.log(this.commentForm.value);

      this.commentAdded.emit({ ...this.commentForm.value, projectId: this.project.id });
      console.log('Comentário enviado!');

      this.commentForm.reset();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}