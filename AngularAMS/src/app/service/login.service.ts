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
export class LoginService {

  url: string = environment.hostName + environment.login;

  login(form){
    let fullUrl: string = this.url + '?userId=' + form.userId + '&userPassword=' + form.userPassword;
    let messageOb = this.http.post<Message>(fullUrl, '');
    messageOb.subscribe((message)=>{
      if(message.successStatus) {
          if(message.info==='Student Login Successful!'){
            this.auth.set(form.userId, form.password, message.token);
            this.router.navigate(['/student-dashboard']);
          }
          else{
            this.auth.set(form.userId, form.password, message.token);
            this.router.navigate(['/teacher-dashboard']);
          }
      }
    });
  }

  constructor(private http: HttpClient, private auth: AuthorizationService, private router: Router) { }
}
