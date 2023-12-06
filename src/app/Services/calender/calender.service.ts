import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/AppConfig';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor(private http: HttpClient, private router: Router) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  // thêm lịch báo cáo 
  addCalender(calenderData: any) : Observable<any> {
    const url = this.getFullUrl('api/v1/calender/add');
    return this.http.post<any>(url, calenderData);
  }

  // xóa lịch báo cáo
  delete(calenderId: number) : Observable<void> {
    return this.http.delete<void>(this.getFullUrl(`api/v1/calender/${calenderId}`));
  }

}
