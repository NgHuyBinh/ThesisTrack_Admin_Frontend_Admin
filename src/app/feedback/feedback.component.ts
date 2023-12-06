import { ChangeDetectorRef, Component } from '@angular/core';
import { Feedback } from '../Models/feedback/feedback';
import { FeedbackService } from '../Services/feedback/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  list: any[] = [];
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService,
    private detect: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.feedbackService.getAllFeedback().subscribe(data => {
      this.feedbacks = data;
    });
  }

  deleteFeedback(feedback: any) {
    // Gọi hàm xóa từ service của bạn
    console.log(feedback.id);
    this.feedbackService.deleteFeedback(feedback.id).subscribe({
    
      next: (response: any) => {
        Swal.fire("Thành công", "Đã xóa phản hồi thành công", "success");
        this.loadFeedbacks();

        this.detect.detectChanges();
      },
      error: (error) => {
        Swal.fire("Lỗi", "Xóa  phản hồi thất bại", "error");
        // console.error("Lỗi khi xóa  phản hồi:", error);
      }
    });
  }

}
