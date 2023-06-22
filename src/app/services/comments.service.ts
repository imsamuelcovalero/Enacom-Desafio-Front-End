/* File: src/app/services/comments.service.ts */
import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/project.interface';
import { LocalStorageHelper } from '../helpers/localstorage.helper';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  // constructor() { }

  getComments(projectId: number): IComment[] {
    console.log('CommentsService.getComments()');

    return LocalStorageHelper.getComments(projectId);
  }

  addComment(comment: IComment): void {
    console.log('CommentsService.addComment()');

    LocalStorageHelper.saveComments(comment);
  }
}