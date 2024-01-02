import { ChangeDetectorRef, Component } from '@angular/core';
import { Feedback } from '../Models/feedback/feedback';
import { FeedbackService } from '../Services/feedback/feedback.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  list: any[] = [];
  feedbacks: Feedback[] = [];
  form: any;
  reply: string = "";
  feedbackId: number = 0;
  feedbackForm!: FormGroup;
  updatedFeedback!: string;


  constructor(fb: FormBuilder,
    private feedbackService: FeedbackService,
    private detect: ChangeDetectorRef
  ) {
    this.form = fb.group({
      reply: ['', [Validators.required]],
      // updatedFeedback: ['',[Validators.required]],
    });
  }
  ngOnInit(): void {
    this.loadFeedbacks();
    // this.replyFeedback();
  }

  // loadFeedbacks(): void {
  //   this.feedbackService.getAllFeedback().subscribe(data => {
  //     this.feedbacks = data;
  //   });
  // }

  loadFeedbacks(): void {
    this.feedbackService.getAllFeedback().subscribe({
      next: (response: any[]) => {
        this.feedbacks = response;
        console.log(this.feedbacks)
      },
      error: (error) => {

      }
    });
  }

  deleteFeedback(feedback: any) {
    console.log(feedback.id);
    this.feedbackService.deleteFeedback(feedback.id).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Đã xóa phản hồi thành công", "success");
        this.loadFeedbacks();
        this.detect.detectChanges();
      },
      error: (error) => {
        Swal.fire("Lỗi", "Xóa  phản hồi thất bại", "error");
      }
    });
  }

  // cập nhận xác nhận phẩn hồi
  // reply(id: number) {
  //   this.feedbackService.updateFeedback(id).subscribe({
  //     next: (response: any) => {

  //     }
  //   })
  // }

  // replyFeedback(id: number) {
  //   this.feedbackService.updateFeedback(id)({
  //     "reply": this.form.value.reply,
  //   }).subscribe({
  //     next: (response: any) => {
  //       Swal.fire("Thành công", "Tiếp nhận thông tin thành tông", "success");
  //       this.form.reset();
  //       this.detect.detectChanges();
  //     },
  //     error: (error) => {
  //       Swal.fire("Có lỗi xảy ra", error.error.message, "error");
  //     }
  //   })
  // }
  // updateFeedback(): void {
  //   const updatedFeedback = this.form.value;
  //   this.feedbackService.updateFeedback(this.feedbackId, this.form.value.reply).subscribe(
  //     (resultMessage) => {
  //       console.log(resultMessage);
  //       // Xử lý kết quả cập nhật thành công
  //     },
  //     (error) => {
  //       console.error(error);
  //       // Xử lý lỗi nếu có
  //     }
  //   );
  // }
  replyFeedback(id: number) {
    if (this.form.valid) {
      this.feedbackService.updateFeedback(id, this.form.value.reply).subscribe(
        (response) => {
          Swal.fire("Thành công", "Cập nhật phản hồi thành công", "success");
          // Add any additional logic after successful update
          this.loadFeedbacks();
          this.detect.detectChanges();
        }

      );
    } else {
      Swal.fire("Lỗi", "Vui lòng điền đầy đủ thông tin", "error");
    }
  }
}
