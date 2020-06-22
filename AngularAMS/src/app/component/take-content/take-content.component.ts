import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewDTOService } from 'src/app/service/view-dto.service';
import { AssignmentdtoService } from 'src/app/service/assignmentdto.service';
import { SidebarOptionsService } from 'src/app/service/sidebar-options.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-take-content',
  templateUrl: './take-content.component.html',
  styleUrls: ['./take-content.component.css']
})
export class TakeContentComponent implements OnInit {
  selectedDTO: AssignmentDTO;
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
