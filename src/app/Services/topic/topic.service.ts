import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/Models/topic/topic';
import { AppConfig } from 'src/app/config/AppConfig';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {
  getTopics() {
    throw new Error('Method not implemented.');
  }

    constructor(private http: HttpClient, private router: Router) { }

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getAllTopic(teacherId: number): Observable<Topic[]> {
    return this.http.get<Topic[]>(
      this.getFullUrl(`api/v1/topics/teacher/${teacherId}`)
    );
  }

  update(topicId: number, name: String): Observable<void> {
    return this.http.patch<void>(this.getFullUrl(`api/v1/topics/${topicId}`), name);
  }

  delete(topicId: number): Observable<void> {
    return this.http.delete<void>(this.getFullUrl(`api/v1/topics/${topicId}`));
  }
  
  // add(name: String, subjectId: number, teacherId: number): Observable<void> {
  //   return this.http.post<void>(this.getFullUrl(`api/v1/topics/add`), name, subjectId, teacherId);
  // }

  add(topicData: any) : Observable<any> {
    const url = this.getFullUrl(`api/v1/topics/add`);
    return this.http.post<any>(url, topicData);
  }

}
;