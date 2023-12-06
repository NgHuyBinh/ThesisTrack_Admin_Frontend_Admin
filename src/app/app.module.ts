import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentRowComponent } from './content-row/content-row.component';
import { ResearchTopicComponent } from './research-topic/research-topic.component';
import { CalenderComponent } from './calender/calender.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentAssessmentComponent } from './comment-assessment/comment-assessment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StudenttopicAdminComponent } from './studenttopic-admin/studenttopic-admin.component';
import { PdfDialogComponent } from './pdf-dialog/pdf-dialog.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CalenderAdminComponent } from './calender-admin/calender-admin.component';
import { MarkstudentComponent } from './markstudent-dialog/markstudent.component';
import { EffectDialogComponent } from './effect-dialog/effect-dialog.component';
import { AllMarkComponent } from './all-mark/all-mark.component';
// import { SubjectComponent } from './models/subject/subject/subject.component';
// import { RegisterteacherComponent } from './Models/registerteacher/registerteacher/registerteacher.component';
// import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    NotFoundComponent,
    TopbarComponent,
    ContentRowComponent,
    ResearchTopicComponent,
    CalenderComponent,
    CommentAssessmentComponent,
    FeedbackComponent,
    StudenttopicAdminComponent,
    PdfDialogComponent,
    CalenderAdminComponent,
    MarkstudentComponent,
    EffectDialogComponent,
    AllMarkComponent
    // ,
    // SubjectComponent
    // RegisterteacherComponent,
  
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
