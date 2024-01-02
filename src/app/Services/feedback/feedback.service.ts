import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient, private router: Router) { }
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getAllFeedback(): Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/feedbacks/all`));
  }

  deleteFeedback(Id: number): Observable<void> {
    // console.log(Id);
    const id = Id.toString();
    return this.http.delete<void>(this.getFullUrl(`api/v1/feedbacks/${id}`));
  }

  updateFeedback(id: number, reply: string): Observable<void> {
    const url = this.getFullUrl(`api/v1/feedbacks/${id}`);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put<void>(url, { reply }, { headers });
  }

  // updateFeedback(id: number, updatedFeedback: any): Observable<string> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.patch<string>(url, updatedFeedback);
  // }


}
