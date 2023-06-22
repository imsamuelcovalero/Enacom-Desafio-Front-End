/* File: src/app/services/comments.service.ts */
import { Injectable } from '@angular/core';
import { IComment } from '../interfaces/project.interface';
import { LocalStorageHelper } from '../helpers/localstorage.helper';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  // constructor() { }

  getComments(projectId: string): IComment[] {
    return LocalStorageHelper.getComments(projectId);
  }

  addComment(comment: IComment): void {
    LocalStorageHelper.saveComments(comment);
  }
}