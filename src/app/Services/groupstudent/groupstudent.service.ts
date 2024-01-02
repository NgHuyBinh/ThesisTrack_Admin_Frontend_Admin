import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Groupstudent } from 'src/app/Models/groupstudent/groupstudent';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class GroupstudentService {
  constructor(private http: HttpClient, private router: Router) { }
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }


  getAllGroupStudent() : Observable<Groupstudent[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/groupstudents/all`))
  }

  addGroup(groupData: any) : Observable<any> {
    const url = this.getFullUrl(`api/v1/groupstudents/add`);
    return this.http.post<any>(url, groupData);
  }

  getGroupByTeacher(teacherId: number): Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/groupstudents/teacher/${teacherId}`));
  }

}
