import { Component } from '@angular/core';
import { RegisterTopic } from '../Models/registertopic/registertopic';
import { MatDialog } from '@angular/material/dialog';
import { PdfexportService } from '../Services/pdf/pdfexport.service';
import { MarkService } from '../Services/mark/mark.service';
import { Mark } from '../Models/mark/mark';

@Component({
  selector: 'app-all-mark',
  templateUrl: './all-mark.component.html',
  styleUrls: ['./all-mark.component.css']
})
export class AllMarkComponent {
  // data: any;
  allMark: Mark[] = [];

  constructor(private dialog: MatDialog
    , private pdfex: PdfexportService
    , private markService: MarkService
  ) { }

  ngOnInit(): void {
    this.loadMarks();
  }

  // hiển thj tất cả thông tin 
  loadMarks(): void {
    this.markService.getAllMarkStudent().subscribe(data => {
      this.allMark = data;
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
