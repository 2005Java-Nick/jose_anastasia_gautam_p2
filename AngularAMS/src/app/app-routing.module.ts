import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { TeacherGradedDashboardComponent } from './component/teacher-graded-dashboard/teacher-graded-dashboard.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { StudentGradedDashboardComponent } from './component/student-graded-dashboard/student-graded-dashboard.component';
import { StudentCompletedDashboardComponent } from './component/student-completed-dashboard/student-completed-dashboard.component';
import { TeacherCreateDashboardComponent } from './component/teacher-create-dashboard/teacher-create-dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "teacher-graded-dashboard", component: TeacherGradedDashboardComponent },
  { path: "student-graded-dashboard", component: StudentGradedDashboardComponent },
  { path: "student-completed-dashboard", component: StudentCompletedDashboardComponent },
  { path: "teacher-create-dashboard", component: TeacherCreateDashboardComponent },
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
