import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';

@Component({
  selector: 'app-markstudent',
  templateUrl: './markstudent.component.html',
  styleUrls: ['./markstudent.component.css']
})
export class MarkstudentComponent {

  
  constructor(private authService: AuthService, private router: Router) {}


  // constructor(
  //   public dialogRef: MatDialogRef<MarkstudentComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any,
  //   // @Inject(MAT_DIALOG_DATA) public data: { url: string }
  // ) { }
  // closedialog() {
  //   this.dialogRef.close('Closed using function');
  // }
}
