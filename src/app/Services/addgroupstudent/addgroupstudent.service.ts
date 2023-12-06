import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class AddgroupstudentService {

  constructor(private http: HttpClient, private router: Router) { }
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  // getAllGroupStudent() : Observable<any[]> {
  //   return this.http.get<any[]>(this.getFullUrl(`api/v1/groupstudents/all`))
  // }

  // addGroupstudent(id:number, studentId: number, groupstudentId: number) : Observable<void> {
  //   return this.http.post<void>(this.getFullUrl(`api/v1/groupstudents/add`),id , studentId, groupstudentId)
  // }

}
