import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth/auth.service';
import { TeacherService } from '../Services/teacher/teacher.service';
import { Teacher } from '../Models/teacher/teacher';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  teacher: Teacher | undefined;

  facultyAll: string[] = [];


  constructor(
    private teacherService: TeacherService,
    private authService: AuthService,
    // private 
  ) { }

  ngOnInit(): void {
    this.getTeacherInfo(this.authService.getUsername());
    // this.getFacultyAll();
  }

  getTeacherInfo(teacherNumber: string): void {
    this.teacherService.getTeacherByNoTeacher(teacherNumber).subscribe({
      next: (data) => {
        console.log('Teacher info:', data);
        this.teacher = data;
      },
      error: (error) => {
        console.error('Error fetching teacher info:', error);
      },
    });
  }

  // getFacultyAll(): void {
  //   // Assuming your TeacherService has a method to fetch faculty names
  //   this.teacherService.getFacultyAll().subscribe({
  //     next: (data) => {
  //       console.log('Faculty names:', data);
  //       this.facultyAll = data; // Update the faculty names list
  //     },
  //     error: (error) => {
  //       console.error('Error fetching faculty names:', error);
  //     },
  //   });
  // }

}
