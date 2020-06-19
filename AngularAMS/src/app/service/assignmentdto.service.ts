import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import {HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import{ AssignmentDTO} from '../interface/assignmentdto.interface';


@Injectable({
  providedIn: 'root'
})
export class AssignmentdtoService {

  getNewAssignmentsStudent() {
    let url: string = environment.hostName + environment.getNewAssignments;
    let fullUrl: string = url + '?studentId=' + this.auth.getUserId();
    console.log("Full url is " + fullUrl);
    return this.httpClient.get<AssignmentDTO[]>(fullUrl);
  }

  getCompletedAssignmentsStudent() {
    let url: string = environment.hostName + environment.getCompletedAssignments;
    let fullUrl: string = url + '?studentId=' + this.auth.getUserId();
    console.log("Full url is " + fullUrl);
    return this.httpClient.get<AssignmentDTO[]>(fullUrl);
  }

  getGradedAssignmentsStudent() {
    let url: string = environment.hostName + environment.getGradedAssignments;
    let fullUrl: string = url + '?studentId=' + this.auth.getUserId();
    console.log("Full url is " + fullUrl);
    return this.httpClient.get<AssignmentDTO[]>(fullUrl);
  }

  getAllCompletedAssignmentsStudent() {
    let url: string = environment.hostName + environment.getAllCompletedAssignments;
    let fullUrl: string = url + '?teacherId=' + this.auth.getUserId();
    console.log("Full url is " + fullUrl);
    return this.httpClient.get<AssignmentDTO[]>(fullUrl);
  }

  getAllGradedAssignmentsStudent() {
    let url: string = environment.hostName + environment.getAllGradedAssignments;
    let fullUrl: string = url + '?teacherId=' + this.auth.getUserId();
    console.log("Full url is " + fullUrl);
    return this.httpClient.get<AssignmentDTO[]>(fullUrl);
  }




  constructor(private auth: AuthorizationService, private httpClient: HttpClient) { }
}
