import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ObservedValueOf } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  constructor(private http: HttpClient, private router: Router) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  mark(markData: any): Observable<any> {
    const url = this.getFullUrl("api/v1/marks/add");
    return this.http.post<any>(url, markData);
  }

  // lấy thông tất cả điểm 
  getAllMarkStudent() : Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/marks/all`));
  }

  // chỉnh sửa điểm sinh viên
  updateMark(markData: any): Observable<any> {
    const url = this.getFullUrl("api/v1/marks/update");
    return this.http.put<any>(url, markData);
  }

  // xem điểm sinh viên 
  getMarksByStudentIdAndTeacherId(studentId: number, teacherId: number): Observable<any> {
    const url = this.getFullUrl(`api/v1/marks/student/${studentId}/teacher/${teacherId}`);
    return this.http.get<any>(url);
  }
}
