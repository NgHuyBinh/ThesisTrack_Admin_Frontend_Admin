import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterTopic } from 'src/app/Models/registertopic/registertopic';
import { AppConfig } from 'src/app/config/AppConfig';
import { HttpClient } from '@angular/common/http';
import { Topic } from 'src/app/Models/topic/topic';
// import { StudentResponseDTO } from/

@Injectable({
  providedIn: 'root',
})
export class RegisterTopicService {
  constructor(private http: HttpClient, private router: Router) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  
  // getStudent(): Observable<RegisterTopic>{
  //   return this.http.get<RegisterTopic>(
  //     this.getFullUrl(`api/v1/student`)
  //   );
  // }
  private apiUrl = 'api/v1/student';  // Thay YOUR_API_URL bằng URL của API

  getStudentByNoStudent(numberStudent: string): Observable<any> {
    console.log("num",numberStudent)
    const url = `${AppConfig.baseUrl}/${this.apiUrl}?numberStudent=${numberStudent}`;
    console.log(url)
    return this.http.get<any>(url);
  }


  registerTopic(registerTopicData: any): Observable<any> {
    const url = this.getFullUrl("api/v1/registertopic");
    return this.http.post<any>(url, registerTopicData);
  }

  getAllTopics(teacherId: number): Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/registertopic/teacher/${teacherId}`));
  }
  
  updateStatus(id:number, status: number, reason: string): Observable<void> {
    return this.http.patch<void>(this.getFullUrl(`api/v1/registertopic/${id}`),{"status":status,"reason":reason});
  }

  getAll() : Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/registertopic/all`));
  }
}
