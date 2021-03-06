import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService } from '../../service/sidebar-options.service';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewDTOService } from 'src/app/service/view-dto.service';
import { AssignmentdtoService } from 'src/app/service/assignmentdto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teacher-grade-completed',
  templateUrl: './teacher-grade-completed.component.html',
  styleUrls: ['./teacher-grade-completed.component.css']
})
export class TeacherGradeCompletedComponent implements OnInit {

  selectedDTO: AssignmentDTO;

  sidebarOptions;

  get diagnostic() { 
  return JSON.stringify(this.selectedDTO);
  };
  

 constructor(sidebarOptionsService:SidebarOptionsService,
  private router : Router, 
  private viewDTOService: ViewDTOService, 
  private adtoService: AssignmentdtoService,
  private route: ActivatedRoute,
    private location: Location) { 
   this.sidebarOptions = sidebarOptionsService.teacherSideOptions("");
 }

  ngOnInit(): void {
    this.selectedDTO = this.viewDTOService.getDTO();
  }

}
