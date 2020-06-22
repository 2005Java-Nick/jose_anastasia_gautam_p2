import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService } from '../../service/sidebar-options.service';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';
import { ViewDTOService } from 'src/app/service/view-dto.service';

@Component({
  selector: 'app-student-view-completed',
  templateUrl: './student-view-completed.component.html',
  styleUrls: ['./student-view-completed.component.css']
})
export class StudentViewCompletedComponent implements OnInit {

selectedDTO : AssignmentDTO;

 sidebarOptions;

 constructor(sidebarOptionsService:SidebarOptionsService, private viewDTOService: ViewDTOService) { 
   this.sidebarOptions = sidebarOptionsService.studentSideOptions("");
 }

  ngOnInit(): void {
    this.selectedDTO = this.viewDTOService.getDTO();
  }

}
