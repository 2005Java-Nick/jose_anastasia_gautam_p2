import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ContentComponent } from './component/content/content.component';
import { HeaderComponent } from './component/header/header.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { StudentGradedDashboardComponent } from './component/student-graded-dashboard/student-graded-dashboard.component';
import { TeacherGradedDashboardComponent } from './component/teacher-graded-dashboard/teacher-graded-dashboard.component';
import { StudentCompletedDashboardComponent } from './component/student-completed-dashboard/student-completed-dashboard.component';
import { TeacherCreateDashboardComponent } from './component/teacher-create-dashboard/teacher-create-dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { TeacherGradeDashboardComponent } from './component/teacher-grade-dashboard/teacher-grade-dashboard.component';
import { StudentTakeDashboardComponent } from './component/student-take-dashboard/student-take-dashboard.component';
import { CreateContentComponent } from './component/create-content/create-content.component';
import { TakeContentComponent } from './component/take-content/take-content.component';
import { StudentViewCompletedComponent } from './component/student-view-completed/student-view-completed.component';
import { ViewGradedComponent } from './component/view-graded/view-graded.component';
import { TeacherGradeCompletedComponent } from './component/teacher-grade-completed/teacher-grade-completed.component';
import { StudentViewGradedComponent } from './component/student-view-graded/student-view-graded.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherDashboardComponent,
    SidebarComponent,
    ContentComponent,
    HeaderComponent,
    StudentDashboardComponent,
    LoginComponent,
    StudentGradedDashboardComponent,
    TeacherGradedDashboardComponent,
    StudentCompletedDashboardComponent,
    TeacherCreateDashboardComponent,
    RegisterComponent,
    TeacherGradeDashboardComponent,
    StudentTakeDashboardComponent,
    CreateContentComponent,
    TakeContentComponent,
    StudentViewCompletedComponent,
    ViewGradedComponent,
    TeacherGradeCompletedComponent,
    StudentViewGradedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
