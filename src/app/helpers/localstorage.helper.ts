/* File: src/app/helpers/localStorage.helper.ts */
import { IComment } from "../interfaces/project.interface";


export class LocalStorageHelper {
  static getComments(projectId: number) {
    console.log('LocalStorageHelper.getComments()');

    const allComments = localStorage.getItem('myPortfolioComments');
    return allComments ? JSON.parse(allComments).filter((comment: IComment) => comment.projectId === projectId) : [];
  }

  static saveComments(comment: IComment) {
    console.log('LocalStorageHelper.saveComments()');

    let allComments = localStorage.getItem('myPortfolioComments');
    if (!allComments) {
      allComments = '[]';  // Inicializa allComments como uma string de array vazia se for null
    }

    const commentsArray = JSON.parse(allComments);
    commentsArray.push(comment);
    localStorage.setItem('myPortfolioComments', JSON.stringify(commentsArray));
  }
}