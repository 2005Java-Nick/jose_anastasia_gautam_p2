import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { TeacherGradedDashboardComponent } from './component/teacher-graded-dashboard/teacher-graded-dashboard.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentGradedDashboardComponent } from './component/student-graded-dashboard/student-graded-dashboard.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "teacher-graded-dashboard", component: TeacherGradedDashboardComponent },
  { path: "student-graded-dashboard", component: StudentGradedDashboardComponent },
  //{ path: "login", component: LoginComponent },
  // { path: "", redirectTo: "/login", pathMatch: "full" }
  { path: "", redirectTo: "/teacher-dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
