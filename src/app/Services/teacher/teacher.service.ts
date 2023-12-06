import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';
import { Teacher } from 'src/app/Models/teacher/teacher';
import { Faculty } from 'src/app/Models/faculty/faculty';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  // private baseUrl = `${AppConfig.baseUrl}/api/v1`;

  listFaculty: Faculty[]  = [];
  constructor(private http: HttpClient) {}

  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  getTeacherByNoTeacher(noTeacher: string): Observable<Teacher> {
    const url = `${AppConfig.baseUrl}/api/v1/teacher?numberTeacher=${noTeacher}`;
    return this.http.get<Teacher>(url);
  }

  // getFacultyAll(): Observable<string[]> {
  //   const url = this.getFacultyAll('faculties');
  //   return this.http.get<string[]>(url);
  // }
}
