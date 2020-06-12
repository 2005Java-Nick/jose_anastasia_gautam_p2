import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
