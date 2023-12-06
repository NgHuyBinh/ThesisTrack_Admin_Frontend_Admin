import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ResearchTopicComponent } from './research-topic/research-topic.component';
import { CalenderComponent } from './calender/calender.component';
import { CommentAssessmentComponent } from './comment-assessment/comment-assessment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StudenttopicAdminComponent } from './studenttopic-admin/studenttopic-admin.component';
import { CalenderAdminComponent } from './calender-admin/calender-admin.component';
import { MarkstudentComponent } from './markstudent-dialog/markstudent.component';
import { EffectDialogComponent } from './effect-dialog/effect-dialog.component';
import { AllMarkComponent } from './all-mark/all-mark.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {

    path: '',
    component: HomeComponent,
    children: [
      //  { path: 'home', component: HomeComponent},
       
      { path: 'research_topic', component: ResearchTopicComponent }, //trang quản lý đề tài
      { path: 'calender', component: CalenderComponent}, // quản lý lịch báo cáo
      { path: 'comment', component: CommentAssessmentComponent}, // quản lý nhận xét và đánh giá
      { path: 'mark_student', component: AllMarkComponent},
      { path: 'feedback', component: FeedbackComponent},

      // phía admin
      { path: 'studenttopic_admin', component: StudenttopicAdminComponent},
      { path: 'calender_admin', component: CalenderAdminComponent},
      { path: 'mark_student', component: MarkstudentComponent}, // chấm điểm sinh viên
      { path: 'effect_dialog', component: EffectDialogComponent} // biên bản kết quả sinh viên 
      

    ],
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
