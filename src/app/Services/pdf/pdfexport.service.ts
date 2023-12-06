import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class PdfexportService {

  constructor(private http: HttpClient, private router: Router) { }


  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  exportRegisterTopicToPdf(): Observable<Blob> {
    const url = this.getFullUrl("api/v1/pdf/registertopic")
    // Gửi yêu cầu GET đến API để tạo tệp PDF 
    return this.http.get(url, { responseType: 'blob' });
  }

  
  exportMarkToPdf(): Observable<Blob> {
    const url = this.getFullUrl("api/v1/pdfmarks/marks")
    // Gửi yêu cầu GET đến API để tạo tệp PDF 
    return this.http.get(url, { responseType: 'blob' });
  }



}
