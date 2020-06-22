import { Component, OnInit } from '@angular/core';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';
import { SidebarOptionsService } from 'src/app/service/sidebar-options.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewDTOService } from 'src/app/service/view-dto.service';
import { AssignmentdtoService } from 'src/app/service/assignmentdto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-view-graded',
  templateUrl: './student-view-graded.component.html',
  styleUrls: ['./student-view-graded.component.css']
})
export class StudentViewGradedComponent implements OnInit {
  selectedDTO: AssignmentDTO;

  get diagnostic() { 
    return JSON.stringify(this.selectedDTO);
    };

  sidebarOptions;

  constructor(private sidebarOptionsService:SidebarOptionsService, 
  private router : Router, 
  private viewDTOService: ViewDTOService, 
  private adtoService: AssignmentdtoService,
  private route: ActivatedRoute,
    private location: Location) { 
      
      this.sidebarOptions = sidebarOptionsService.studentSideOptions("");
    }

  ngOnInit(): void {
    this.selectedDTO = this.viewDTOService.getDTO();
  }

}
