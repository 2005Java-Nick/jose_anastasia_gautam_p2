import { Component, OnInit, Input } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService } from '../../service/sidebar-options.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { ViewDTOService } from 'src/app/service/view-dto.service';
import{ AssignmentDTO} from '../../interface/assignmentdto.interface';
import { AssignmentdtoService } from 'src/app/service/assignmentdto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-graded',
  templateUrl: './view-graded.component.html',
  styleUrls: ['./view-graded.component.css']
})
export class ViewGradedComponent implements OnInit {
  selectedDTO: AssignmentDTO;

  get diagnostic() { 
    return JSON.stringify(this.selectedDTO);
    };
  // assignment : AssignmentInstanceDisplay = {
  //  course: "History",
  //  assignmentType: "Exam",
  //  assignmentStatus: "GRADED",
  //  assignmentName: "US History (1600s-1776)",
  //  teacherName: "Mrs. Jane Doe",
  //  studentName: "John Doe",
  //  dueDate: {
  //    date: "06-10-2020",
  //    time: "5:00 PM"
  //  },
  //  completionDate: {
  //    date: "06-10-2020",
  //    time: "4:45 PM"
  //  },
  //  gradedDate: {
  //    date: "06-11-2020",
  //    time: "7:45 PM"
  //  },
  //  grade: 80
 //};
 sidebarOptions;

 constructor(private sidebarOptionsService:SidebarOptionsService, 
  private router : Router, 
  private viewDTOService: ViewDTOService, 
  private adtoService: AssignmentdtoService,
  private route: ActivatedRoute,
    private location: Location) { 


   //this.sidebarOptions = sidebarOptionsService.studentSideOptions("");
   this.sidebarOptions = sidebarOptionsService.teacherSideOptions("");
 }

  ngOnInit(): void {
    //this.adtoService.getAllGradedAssignmentsStudent().subscribe((dto)=>{
    //  console.log('List of assignment is ' + dto);
    //  if(dto === null){
    //    this.router.navigate(['/login']);
    //  }
    //  else{
    //   this.dtoList = dto;
    //  }
    //})
    this.selectedDTO = this.viewDTOService.getDTO();

  }

  goBack(): void {
    this.location.back();
  }

}
