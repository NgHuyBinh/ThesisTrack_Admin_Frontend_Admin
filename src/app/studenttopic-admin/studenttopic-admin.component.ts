import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PdfexportService } from '../Services/pdf/pdfexport.service';
import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';
import { RegisterTopicService } from '../Services/registertopic/registertopic.service';
import { RegisterTopic } from '../Models/registertopic/registertopic';

@Component({
  selector: 'app-studenttopic-admin',
  templateUrl: './studenttopic-admin.component.html',
  styleUrls: ['./studenttopic-admin.component.css']
})
export class StudenttopicAdminComponent {
  // data: any;
  allRegister: RegisterTopic[] = [];

  constructor(private dialog: MatDialog
    , private pdfex: PdfexportService
    , private registerTopicService: RegisterTopicService
  ) { }

  ngOnInit(): void {
    this.loadTopics();
  }

  // hiển thj tất cả thông tin 
  loadTopics(): void {
    this.registerTopicService.getAll().subscribe(data => {
      this.allRegister = data;
    })
  }


  // xuất pdf đề tài 
  exportRegisterTopicPdf() {
    this.pdfex.exportRegisterTopicToPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // a.download = 'register_topic.pdf';
      a.download = 'Danh sách đề tài sinh viên';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  // xuất pdf điểm
  exportMarkPdf() {
    this.pdfex.exportMarkToPdf().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      // a.download = 'register_topic.pdf';
      a.download = 'Danh sách kết quả sinh viên';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
