import { ChangeDetectorRef, Component } from '@angular/core';
import { CalenderAdminService } from '../Services/calenderadmin/calenderadmin.service';
import { CalenderService } from '../Services/calender/calender.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { GroupstudentService } from '../Services/groupstudent/groupstudent.service';
import { Groupstudent } from '../Models/groupstudent/groupstudent';
import { CalenderthesisService } from '../Services/calenderthsis/calenderthesis.service';
import { Calenderthesis } from '../Models/calenderthsis/calenderthesis';
import { GroupStudentStudent } from '../Models/GroupStudentStudent/group-student-student';
import { GroupStudentStudentService } from '../Services/GroupStudentStudent/group-student-student.service';

@Component({
  selector: 'app-calender-admin',
  templateUrl: './calender-admin.component.html',
  styleUrls: ['./calender-admin.component.css']
})
export class CalenderAdminComponent {
  calendars: any[] = [];
  editedCalendar: any = {}; // Thêm biến để lưu thông tin lịch đang chỉnh sửa
  formAdd: any;
  groupStudents: Groupstudent[] = [];
  groupStudentId!: number;
  calendarId : number = 0 ;
  calenderthesis!:Calenderthesis;
  groupStudentStudent:GroupStudentStudent[] = [];
  constructor(fb: FormBuilder
    , private calenderAdminService: CalenderAdminService
    , private calenderService: CalenderService
    , private detect: ChangeDetectorRef,private groupStudentService: GroupstudentService,
    private calenderThesisService :CalenderthesisService,
    private groupStudentStudentService: GroupStudentStudentService
  ) {
    this.formAdd = fb.group({
      room: ['', [Validators.required]],
      week: ['', [Validators.required]],
      day: ['', [Validators.required]],
      period: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });
  }
  getGroupStudentId(id: number) {
    this.groupStudentId = id;
    this.calenderThesisService.getByGroupStudentId(this.groupStudentId).subscribe({
      next:(response: Calenderthesis) => {
        this.calenderthesis = response;
      },
      error: (error) => [

      ]
    })
    this.groupStudentStudentService.getByGroupStudentId(this.groupStudentId).subscribe({
      next:(response: GroupStudentStudent[]) => {
        this.groupStudentStudent=response;
      },
      error: (error) => {

      }
    })
  }
  xepLich() {
    if(this.calendarId == 0 ){
      Swal.fire("Có lỗi",'Vui lòng chọn lịch','error');
      return;
    }
    let c = {
      "groupStudent": {
            "id": this.groupStudentId
          },
      "calender": {
            "id": this.calendarId
          }
    }
    this.calenderThesisService.addCalenderThesis(c).subscribe({
      next: (response: void)=> {
        Swal.fire("Thành công","Bạn đã đăng ký thành công",'success');
      },
      error: (error) => {
        Swal.fire("Thất bại",error.error.message,'error');
      }
    })
  }
  getAllGroupStudent() {
    this.groupStudentService.getAllGroupStudent().subscribe({
      next: (response: Groupstudent[]) => {
        this.groupStudents = response;
      },
      error: (error) => {

      }
    })
  }
  ngOnInit(): void {
    this.getCalendars();
    this.getAllGroupStudent();
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
          this.detect.detectChanges();
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
    // console.log("thuer");
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
        this.getCalendars();
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
        this.getCalendars();
      },
      error: (error) => {
        Swal.fire("Lỗi", "Không thể xóa lịch báo cáo này", error);
      }
    })
  }


}
