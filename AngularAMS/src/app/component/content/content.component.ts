import { Component, OnInit, Input } from '@angular/core';
import { ViewDTOService } from 'src/app/service/view-dto.service';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  name;
  @Input()
  dtoList;
  @Input()
  viewer;
  
  onClick(assignment:AssignmentDTO){
    console.log(assignment);
    this.viewDTOService.setDTO(assignment);
  }

  route(assignment:AssignmentDTO){
    if(assignment.assignmentStatus === "GRADED"){
      if(this.viewer === 'Teacher'){
        return "/view-graded"
      }else{
        return "/student-view-graded";
      }
    }else if(assignment.assignmentStatus === "COMPLETED"){
      if(this.viewer === 'Teacher'){
        return "/teacher-grade-completed";
      }else{
        return "/student-view-completed";
      }
    }else{
      return "/student-take-dashboard";
      // OR
      //return "/take-content";
    }
  }
  
  constructor(private viewDTOService: ViewDTOService) { }

  ngOnInit(): void {
  }

}
