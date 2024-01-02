import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/AppConfig';

import { Observable } from 'rxjs';
import { Calenderthesis } from 'src/app/Models/calenderthsis/calenderthesis';

@Injectable({
  providedIn: 'root'
})
export class CalenderthesisService {
  constructor(private http: HttpClient, private router: Router) { }
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  addCalenderThesis(calenderThesis: any) : Observable<void> {
    const url = this.getFullUrl(`api/v1/calenderthesis/add`);
    return this.http.post<void>(url, calenderThesis);
  }
  getByGroupStudentId(id: number): Observable<Calenderthesis> {
    return this.http.get<Calenderthesis>(this.getFullUrl(`api/v1/calenderthesis/group-student-id/${id}`));
  }
}