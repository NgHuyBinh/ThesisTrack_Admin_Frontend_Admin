import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class RegisterTeacherService {

  constructor(private http: HttpClient, private router: Router) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }


  getAllRegisterTeacher(teacherId: number): Observable<any[]>{
    return this.http.get<any[]>(this.getFullUrl(`api/v1/registerteacher/teacher/${teacherId}`))
  }
  updateStatusRegister(id: number,requestBody: any) : Observable<void> {
    return this.http.patch<void>(this.getFullUrl(`api/v1/registerteacher/${id}`),requestBody);
  }

}
