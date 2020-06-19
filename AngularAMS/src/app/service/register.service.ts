import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../interface/message.interface';
import { HttpClient } from '@angular/common/http';
import {AuthorizationService } from '../service/authorization.service';
import { Router } from '@angular/router';
import { StudentCompletedDashboardComponent } from '../component/student-completed-dashboard/student-completed-dashboard.component';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  registerStudent(form) {
    let studentUrl: string = environment.hostName + environment.registerStudent;
    let studentFullUrl: string = studentUrl + '?studentId=' + form.studentId + '&studentFirstName=' + form.studentFirstName +
      '&studentLastName=' + form.studentLastName + '&studentEmail=' + form.studentEmail + 
      '&studentPassword=' + form.studentPassword + '&studentClass=' + form.studentClass + 
      '&studentSchool=' + form.studentSchool;
    let messageOb = this.http.post<Message>(studentFullUrl, '');
    messageOb.subscribe((message)=>{
        if(message.successStatus) {
          console.log(message);
          this.router.navigate(['/login']);
        }
        else{
          console.log(message);
        }
      });
  }

  
  registerTeacher(form) {
    let teacherUrl: string = environment.hostName + environment.registerTeacher;
    let teacherFullUrl: string = teacherUrl + '?teacherId=' + form.teacherId + '&teacherFirstName=' + form.teacherFirstName +
      '&teacherLastName=' + form.teacherLastName + '&teacherEmail=' + form.teacherEmail + 
      '&teacherPassword=' + form.teacherPassword + '&teacherSubject=' + form.teacherSubject + 
      '&teacherSchool=' + form.teacherSchool;
    let messageOb = this.http.post<Message>(teacherFullUrl, '');
    messageOb.subscribe((message)=>{
        if(message.successStatus) {
          console.log(message);
          this.router.navigate(['/login']);
        }
        else{
          console.log(message);
        }
      });
  }

  constructor(private http: HttpClient, private auth: AuthorizationService, private router: Router) { }
}
