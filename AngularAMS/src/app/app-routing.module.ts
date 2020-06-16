import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { TeacherGradedDashboardComponent } from './component/teacher-graded-dashboard/teacher-graded-dashboard.component';
import { TeacherGradeDashboardComponent } from './component/teacher-grade-dashboard/teacher-grade-dashboard.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentGradedDashboardComponent } from './component/student-graded-dashboard/student-graded-dashboard.component';
import { StudentCompletedDashboardComponent } from './component/student-completed-dashboard/student-completed-dashboard.component';
import { StudentTakeDashboardComponent } from './component/student-take-dashboard/student-take-dashboard.component';
import { TeacherCreateDashboardComponent } from './component/teacher-create-dashboard/teacher-create-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import {StudentViewCompletedComponent} from './component/student-view-completed/student-view-completed.component';
import {ViewGradedComponent } from './component/view-graded/view-graded.component';
import {TeacherGradeCompletedComponent} from './component/teacher-grade-completed/teacher-grade-completed.component';

const routes: Routes = [
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "teacher-graded-dashboard", component: TeacherGradedDashboardComponent },
  { path: "student-graded-dashboard", component: StudentGradedDashboardComponent },
  { path: "student-completed-dashboard", component: StudentCompletedDashboardComponent },
  { path: "student-take-dashboard", component: StudentTakeDashboardComponent },
  { path: "teacher-grade-dashboard", component: TeacherGradeDashboardComponent },
  { path: "teacher-create-dashboard", component: TeacherCreateDashboardComponent },
  { path: "student-view-completed", component: StudentViewCompletedComponent },
  { path: "teacher-grade-completed", component: TeacherGradeCompletedComponent },
  { path: "view-graded", component: ViewGradedComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
  // { path: "", redirectTo: "/teacher-dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
