import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private getPostsApi = 'http://localhost:8081/postsAll';
  private addPostApi = 'http://localhost:8081/postsAdd';
  private addReportApi = 'http://localhost:8081/reportsAdd';
  private getReportsApi = 'http://localhost:8081/reportsAll';

  private getPostsByUserIdApi = 'http://localhost:8081/getPostByUserId/';
  private getReportsByUserIdApi = 'http://localhost:8081/getReportByUserId/';

  private addPostCommentApi = 'http://localhost:8081/postsCommentsAdd';
  private getPostsCommentsApi = 'http://localhost:8081/getPostsCommentsById/';

  private addReportCommentApi = 'http://localhost:8081/reportsCommentsAdd';
  private getReportsCommentsApi = 'http://localhost:8081/getReportsCommentsById/';

  private getActualPostApi='http://localhost:8081/getPostByActualId/';

  constructor(private httpClient:HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(this.getPostsApi);
}

  addPost(post: any): Observable<any> {
    return this.httpClient.post(this.addPostApi, post);
}

getReports(): Observable<any> {
  return this.httpClient.get(this.getReportsApi);
}

addReport(report: any): Observable<any> {
  return this.httpClient.post(this.addReportApi, report);
}

getPostsByUserId(id:any): Observable<any> {
  return this.httpClient.get(this.getPostsByUserIdApi+id);
}

getReportsByUserId(id:any): Observable<any> {
  return this.httpClient.get(this.getReportsByUserIdApi+id);
}

addPostComment(post: any): Observable<any> {
  return this.httpClient.post(this.addPostCommentApi, post);
}

getPostsComments(id:any): Observable<any> {
  return this.httpClient.get(this.getPostsCommentsApi+id);
}

addReportComment(post: any): Observable<any> {
  return this.httpClient.post(this.addReportCommentApi, post);
}

getReportsComments(id:any): Observable<any> {
  return this.httpClient.get(this.getReportsCommentsApi+id);
}

getActualPosts(id:any): Observable<any> {
  return this.httpClient.get(this.getActualPostApi+id);
}

}