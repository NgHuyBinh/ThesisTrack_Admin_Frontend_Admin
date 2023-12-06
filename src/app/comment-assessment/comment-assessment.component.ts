import { ChangeDetectorRef, Component } from '@angular/core';
import { Mark } from '../Models/mark/mark';
import { MarkService } from '../Services/mark/mark.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comment-assessment',
  templateUrl: './comment-assessment.component.html',
  styleUrls: ['./comment-assessment.component.css']
})
export class CommentAssessmentComponent {

  form!: FormGroup;
  list: any[] = [];
  marks: Mark[] = [];

  constructor(private markService: MarkService,
    private detect: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadMark();
  }

// danh sách điểm sinh viên 
  loadMark(): void {
    this.markService.getAllMarkStudent().subscribe(data => {
      this.marks = data;
      this.form = this.fb.group({
        teacher: this.fb.group({
          id: ['', Validators.required],
        }),
        student: this.fb.group({
          id: ['', Validators.required],
        }),
        semester: this.fb.group({
          id: ['', Validators.required],
        }),
        startTime: ['', Validators.required],
        endTime: ['', Validators.required],
        mark11: ['', Validators.required],
        note11: ['', Validators.required],
        mark12: ['', Validators.required],
        note12: ['', Validators.required],
        mark13: ['', Validators.required],
        note13: ['', Validators.required],
        mark14: ['', Validators.required],
        note14: ['', Validators.required],
        mark15: ['', Validators.required],
        note15: ['', Validators.required],
        mark2: ['', Validators.required],
        note2: ['', Validators.required],
        mark21: ['', Validators.required],
        note21: ['', Validators.required],
        mark22: ['', Validators.required],
        note22: ['', Validators.required],
        mark23: ['', Validators.required],
        note23: ['', Validators.required],
        sumMark: ['', Validators.required],
      });
    });
  }

  updateMark() {
    if (this.form.valid) {
      const markData = this.form.value;
      this.markService.updateMark(markData).subscribe(
        (response) => {
          Swal.fire('Thành công', 'cập nhật điểm sinh viên thành công', 'success');
        },
        (error) => {
          Swal.fire('Thất bại', 'Không thể cập nhật điểm sinh viên', 'error');
        }
      );
    } else {
      Swal.fire('Thât bại', 'Lỗi cập nhật', 'error');
    }
  }

}
