import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class CalenderAdminService {

  constructor(private http: HttpClient, private router: Router) {}
  // listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getAllCalendars(): Observable<any[]> {
    return this.http.get<any[]>(this.getFullUrl(`api/v1/calender/all`));
    // return this.http.get<any[]>(this.baseUrl);
  }

  // xóa
  deleteCalendar(id: number): Observable<any> {
    return this.http.delete(this.getFullUrl(`api/v1/calender/${id}`));
  }
  
  // thêm 
  addCalendar(newCalendar: any): Observable<any> {
    return this.http.post(this.getFullUrl(`api/v1/calender/add`), newCalendar);
  }
  
  // chỉnh sửa 
  editCalendar(updatedCalendar: any): Observable<void> {
    return this.http.patch<void>(this.getFullUrl(`api/v1/calender/update/${updatedCalendar.id}`), updatedCalendar);
  }

}
