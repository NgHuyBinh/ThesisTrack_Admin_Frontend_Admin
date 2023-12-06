import { Component } from '@angular/core';
import { CalenderAdminService } from '../Services/calenderadmin/calenderadmin.service';
import { CalenderService } from '../Services/calender/calender.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calender-admin',
  templateUrl: './calender-admin.component.html',
  styleUrls: ['./calender-admin.component.css']
})
export class CalenderAdminComponent {
  calendars: any[] = [];
  editedCalendar: any = {}; // Thêm biến để lưu thông tin lịch đang chỉnh sửa
  formAdd: any;



  constructor(fb: FormBuilder
    , private calenderAdminService: CalenderAdminService
    , private calenderService: CalenderService
  ) {
    this.formAdd = fb.group({
      room: ['', [Validators.required]],
      week: ['', [Validators.required]],
      day: ['', [Validators.required]],
      period: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getCalendars();
  }

  // hiển thị dữ liệu ra bảng 
  getCalendars() {
    this.calenderAdminService.getAllCalendars().subscribe(data => {
      this.calendars = data;
    });
  }

  // Xóa lịch
  deleteCalendar(calendarId: number) {
    if (confirm("Bạn có chắc chắn muốn xóa lịch này không?")) {
      this.calenderAdminService.deleteCalendar(calendarId).subscribe(
        () => {
          this.getCalendars(); // Sau khi xóa thành công, tải lại danh sách lịch
        },
        (error) => {
          console.error("Lỗi xóa lịch:", error);
          // Xử lý lỗi hoặc hiển thị thông báo cho người dùng
        }
      );
    }
  }

  // Chỉnh sửa lịch
  loadCalendarForEditing(calendar: any) {
    this.editedCalendar = { ...calendar }; // Copy thông tin lịch vào editedCalendar
  }

  editCalendar() {
    this.calenderAdminService.editCalendar(this.editedCalendar).subscribe(
      () => {
        console.log("Lịch đã được chỉnh sửa thành công.");
        this.getCalendars(); // Tải lại danh sách lịch sau khi chỉnh sửa
        this.editedCalendar = {}; // Xóa thông tin đã chỉnh sửa để chuẩn bị chỉnh sửa lịch khác
      },
      (error) => {
        console.error("Lỗi khi chỉnh sửa lịch:", error);
        // Xử lý lỗi hoặc hiển thị thông báo cho người dùng
      }
    );
  }

  // thêm lịch báo cáo mới
  addCalenders() {
    console.log("thuer");
    this.calenderService.addCalender({
      "room": this.formAdd.value.room,
      "week": this.formAdd.value.week,
      "day": this.formAdd.value.day,
      "period": this.formAdd.value.period,
      "note": this.formAdd.value.note,
    }).subscribe({
  
      next: (response: any) => {
        Swal.fire("Thành công", "Đã thêm lịch mới thành công", "success");
        this.formAdd.reset();
      },
      error: (error) => {
        Swal.fire("Có lỗi xảy ra", error.error.message, "error");
      }

    })

  }

  // xóa lịch báo cáo
  deleteCalender(id: number) {
    this.calenderService.delete(id).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Đã xóa lịch này thành công)", "success");
        // this.addCalenders()
        this.calendars;
      },
      error: (error) => {
        Swal.fire("Lỗi", "Không thể xóa lịch báo cáo này", error);
      }
    })
  }


}
