import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { TopicService } from '../Services/topic/topic.service';
import { AuthService } from '../Services/auth/auth.service';
import { Teacher } from '../Models/teacher/teacher';
import { TeacherService } from '../Services/teacher/teacher.service';
import { Topic } from '../Models/topic/topic';
import { Subject } from '../Models/subject/subject';
import { RegisterTopicService } from '../Services/registertopic/registertopic.service';
import Swal from 'sweetalert2';
import { RegisterTeacherService } from '../Services/registerteacher/registerteacher.service';

import { RegisterTeacher } from '../Models/registerteacher/registerteacher';
// import { Subject } from 'rxjs';

import { SubjectService } from '../Services/subject/subject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupstudentService } from '../Services/groupstudent/groupstudent.service';
import { Groupstudent } from '../Models/groupstudent/groupstudent';

@Component({
  selector: 'app-research-topic',
  templateUrl: './research-topic.component.html',
  styleUrls: ['./research-topic.component.css']
  // styleUrls: ['../../../src/assets/css_admin/sb-admin-2.css'],
})
export class ResearchTopicComponent implements OnInit {
  // faculties: Faculty[] = [];
  list: any[] = [];
  list1: any[] = [];
  list2: any[] = [];
  isCancelFormVisible: boolean = false;
  cancellingReason: string = '';
  status: number = 0; // Mặc định là 0 (chưa xác nhận)
  reason: string = ''; // Lý do cho trạng thái 2 (hủy)

  registerTeacher!: any;
  groupStudent!: any;

  subject!: Subject;
  teacher!: Teacher;
  // teacherId: number = 0;
  name: String = "";
  code: String = "";
  note: String = "";
  form: any;
  formGroupStudent: any;

  showCancelForm() {
    this.isCancelFormVisible = true;
  }

  constructor(
    fb: FormBuilder,
    // private subjectService: SubjectService,
    private groupStudentService: GroupstudentService,
    private topicService: TopicService,
    private authService: AuthService,
    private teacherService: TeacherService,
    private registerTopicService: RegisterTopicService,
    private detect: ChangeDetectorRef,
    private registerTeacherService: RegisterTeacherService,
  ) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
    });

    this.formGroupStudent = fb.group({
      code: ['', [Validators.required]],
      note: ['', [Validators.required]],
    });
  }
  topic: Topic[] = [];
  teacher_id!: number;
  ngOnInit(): void {

    // thêm đề tài 
    // this.loadTopics();

    this.teacherService.getTeacherByNoTeacher(this.authService.getUsername()).subscribe({
      next: (response: Teacher) => {
        this.teacher_id = response.id;

        // đề tài giảng viên
        this.topicService.getAllTopic(response.id).subscribe({
          next: (response: Topic[]) => {
            this.topic = response;
          },
          error: (error) => {

          }
        })
        this.getAllTopics(response.id);


        // đăng ký gvhd

        this.getRegisterTeacher(this.teacher_id);
        this.getAllStudentRegister(response.id)
        this.getGroupStudent(response.id);
      },
      error: (error) => {

      }
    })

  }
  getRegisterTeacher(id: number) {
    this.registerTeacherService.getAllRegisterTeacher(id).subscribe({
      next: (response: RegisterTeacher[]) => {
        this.registerTeacher = response;
        // this.detect.detectChanges();
        // console.log("gfdshgfkjgf", this.registerTeacher)

      },
      error: (error) => {
      }
    })
  }
  // lấy thông tin nhóm sinh viên theo giảng viên 
  getGroupStudent(id: number) {
    this.groupStudentService.getGroupByTeacher(id).subscribe({
      next: (response: any[]) => {
        this.groupStudent = response;
        // this.detect.detectChanges();

      },
      error: (error) => {
      }
    })
  }

  // lấy toàn bộ đề tài theo giảng viên 
  getAllTopics(id: number) {
    this.registerTopicService.getAllTopics(id).subscribe({
      next: (response: any[]) => {
        this.list1 = response;
        this.detect.detectChanges();
      },
      error: (error) => {

      }
    });
  }

  // lấy toàn bộ đăng ký hướng dẫn luận văn của sinh viên
  getAllStudentRegister(teaccherId: number) {
    this.registerTeacherService.getAllRegisterTeacher(teaccherId).subscribe({
      next: (Response: any[]) => {
        this.list = Response;
        this.detect.detectChanges();
      },
      error: (error) => {

      }
    });
  }

  accept(id: number) {
    this.registerTopicService.updateStatus(id, 1, '').subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Bạn đã cập nhật thành công", "success");
        this.getAllTopics(this.teacher_id);
      },
      error: (error) => {

      }
    })
  }

  startCancel(id: number) {
    this.cancellingReason = ''; // Đặt lý do hủy về rỗng
    // Đặt trạng thái ở đây nếu bạn muốn, ví dụ: this.status = 2;
  }

  cancel(id: number) {
    // Gửi dữ liệu lý do hủy và cập nhật trạng thái
    this.registerTopicService.updateStatus(id, 2, this.cancellingReason).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Đã hủy đăng ký đề tài thành công", "success");
        this.getAllTopics(this.teacher_id);
      },
      error: (error) => {
        // Xử lý lỗi nếu cần
      }
    });
  }

  // thêm đề tài
  // loadTopics(): void {
  //   this.topicService.getTopics().subscribe(topics => {
  //     this.topics = topics;
  //   });
  // }

  // thêm đề tài mới 
  addTopic() {
    this.topicService.add({
      "teacher": {
        "id": this.teacher_id
      },
      "name": this.form.value.name,
      "subject": {
        "id": 1
      },
    }).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Bạn đã thêm đề tài thành công", "success");
        this.form.reset();
        // khi thêm vào gọi nó  để load lại toàn bộ bảng 
        this.getAllTopics(this.teacher_id);
        this.detect.detectChanges();
        this.list1;

      },
      error: (error) => {
        Swal.fire("Có lỗi xảy ra", error.error.message, "error");
      }
    })
  }

  // thêm nhóm sinh viên 
  addGroup() {
    this.groupStudentService.addGroup({
      "teacher": {
        "id": this.teacher_id
      },
      "code": this.formGroupStudent.value.code,
      "note": this.formGroupStudent.value.note,
    }).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Bạn đã thêm đề tài thành công", "success");
        this.formGroupStudent.reset();
        // khi thêm vào gọi nó  để load lại toàn bộ bảng 
        this.getAllTopics(this.teacher_id);
        this.detect.detectChanges();
      },
      error: (error) => {
        Swal.fire("Có lỗi xảy ra", error.error.message, "error");
      }
    })
  }



  // xóa đề tài
  deleteTopic(id: number) {
    // Gọi hàm xóa từ service của bạn
    this.topicService.delete(id).subscribe({
      next: (response: any) => {
        Swal.fire("Thành công", "Đã xóa đề tài thành công", "success");
        // Gọi lại hàm để làm mới danh sách đề tài sau khi xóa
        this.getAllTopics(this.teacher_id);

        this.detect.detectChanges();
      },
      error: (error) => {
        Swal.fire("Lỗi", "Xóa đề tài thất bại", "error");
        console.error("Lỗi khi xóa đề tài:", error);
      }
    });
  }

  acceptRegisterTeacher(rt: RegisterTeacher) {
    let requestBody = {
      "status": 1,
      "note": '',
    }
    this.registerTeacherService.updateStatusRegister(rt.id, requestBody).subscribe({
      next: (response: void) => {
        Swal.fire("Thành công", "Duyệt thành công", 'success');
        this.getRegisterTeacher(this.teacher_id);
      },
      error: (error) => {

      }
    })
  }
}
