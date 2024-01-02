import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/AppConfig';
import { Observable } from 'rxjs';
import { GroupStudentStudent } from 'src/app/Models/GroupStudentStudent/group-student-student';
@Injectable({
  providedIn: 'root'
})
export class GroupStudentStudentService {

  constructor(private http: HttpClient, private router: Router) { }
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  getByGroupStudentId(id: number) : Observable<GroupStudentStudent[]> {
    return this.http.get<GroupStudentStudent[]>(this.getFullUrl(`api/v1/group-student-student/group-student-id/${id}`));
  }
}