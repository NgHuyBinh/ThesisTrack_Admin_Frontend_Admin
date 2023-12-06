import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/Models/faculty/faculty';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient, private router: Router) {}

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  
  // getFaculties(): Observable<Faculty[]> {
  //   return this.http.get<Faculty[]>('api/v1/faculties');
  // }

  getFaculties(): Observable<Faculty[]> {
    const apiUrl = this.getFullUrl('api/v1/faculties'); // Đặt đường dẫn API trực tiếp
    return this.http.get<Faculty[]>(apiUrl);
  }
}