import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import{ AssignmentDTO} from '../interface/assignmentdto.interface';
import { AssignmentInstanceDisplay } from '../interface/assignmentinstancedisplay.interface';
import { QuestionContent } from '../interface/questioncontent.interface';

@Injectable({
  providedIn: 'root'
})
export class ViewDTOService {
  dto: AssignmentDTO;
  
  getDTO(){
    return this.dto;
  }
  setDTO(assignment: AssignmentDTO){
      this.dto = assignment;
  }

  constructor(private router: Router) { }
}
