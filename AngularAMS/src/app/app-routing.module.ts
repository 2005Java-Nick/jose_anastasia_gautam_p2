import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherDashboardComponent } from './component/teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './component/student-dashboard/student-dashboard.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: "teacher-dashboard", component: TeacherDashboardComponent },
  { path: "student-dashboard", component: StudentDashboardComponent },
  { path: "login", component: LoginComponent },
  // { path: "", redirectTo: "/login", pathMatch: "full" }
  { path: "", redirectTo: "/teacher-dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
