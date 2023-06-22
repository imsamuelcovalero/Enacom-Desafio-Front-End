/* File: src/app/helpers/localStorage.helper.ts */
import { IComment } from "src/app/interfaces/project.interface";


export class LocalStorageHelper {
  static getComments(projectId: string) {
    const comments = localStorage.getItem('myPortfolioComments');
    return comments ? JSON.parse(comments).filter((comment: IComment) => comment.projectId === projectId) : [];
  }

  static saveComments(comment: IComment) {
    const comments = this.getComments(comment.projectId);
    comments.push(comment);
    localStorage.setItem('myPortfolioComments', JSON.stringify(comments));
  }
}