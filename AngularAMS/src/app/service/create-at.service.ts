import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {environment } from '../../environments/environment'
import {AuthorizationService } from '../service/authorization.service';
import {Message} from '../interface/message.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateATService {

  createAndAssign (submitObject) {
    let url: string = environment.hostName + environment.create;
    let body: string = 'teacherId='+ this.auth.getUserId() + 
                '&assignmentType=' + submitObject.form.assignmentType +
                '&assignmentTitle=' + submitObject.form.assignmentTitle +
                '&assignmentClass=' + submitObject.form.assignToClass +
                '&dueDate=' + submitObject.form.dueDate +
                '&dueTime=' + submitObject.form.dueTime;
    let questionArray: string = '[';
    let pointsArray: string = '[';
    for (let i of submitObject.questions) {
      questionArray += submitObject.form["question" + i] + ",";
      pointsArray += submitObject.form["point" + i] + ",";
    }
    questionArray += ']';
    pointsArray += ']';

    body += '&questions=' + questionArray + "&maxpoints=" + pointsArray;

    let obMes = this.httpClient.post<Message>(url, body, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })

    obMes.subscribe((message) => {
      if (message.successStatus) {
        this.router.navigate(['/teacher-dashboard']);
      }
    })


  }

  constructor(private auth: AuthorizationService, private httpClient : HttpClient, private router : Router) { }
}
