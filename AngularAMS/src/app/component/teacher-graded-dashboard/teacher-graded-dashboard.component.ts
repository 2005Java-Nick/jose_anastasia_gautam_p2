import { Component, OnInit, Input, Output } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';
import {AssignmentdtoService } from '../../service/assignmentdto.service';
import {Router} from '@angular/router';
import { AssignmentDTO } from 'src/app/interface/assignmentdto.interface';
import { EventEmitter } from 'protractor';
import {ViewDTOService} from '../../service/view-dto.service';



@Component({
  selector: 'app-teacher-graded-dashboard',
  templateUrl: './teacher-graded-dashboard.component.html',
  styleUrls: ['./teacher-graded-dashboard.component.css']
})
export class TeacherGradedDashboardComponent implements OnInit {
  dtoList = [];
  selectedDTO: AssignmentDTO;
  name = this.dtoList[5];
  //name = 'Mrs. Jane Doe';
  viewer = 'Teacher';
  chosen = false;
  sidebarOptions;
  
  onSelect(chosenDTO: AssignmentDTO): void {
    //this.selectedDTO = this.viewGradedService.getDTO(chosenDTO.instanceId);
    this.chosen = true;
    this.router.navigate(['/view-graded']);
  }
  //     course: "History",
  //     assignmentType: "Exam",
  //     assignmentStatus: "Graded",
  //     assignmentName: "US History (1600s-1776)",
  //     teacherName: "Mrs. Jane Doe",
  //     studentName: "John Doe",
  //     dueDate: {
  //       date: "06-10-2020",
  //       time: "5:00 PM"
  //     },
  //     completionDate: {
  //       date: "06-10-2020",
  //       time: "4:45 PM"
  //     },
  //     gradedDate: {
  //       date: "06-11-2020",
  //       time: "7:45 PM"
  //     },
  //     grade: 80
  //   }
  // ];


  constructor(private sidebarOptionsService:SidebarOptionsService, private adtoService: AssignmentdtoService, private router: Router, private viewDTOService: ViewDTOService) { 
    this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-graded-dashboard");
  }

  ngOnInit(): void {
    this.adtoService.getAllGradedAssignmentsStudent().subscribe((dto)=>{
      console.log('List of assignment is ' + dto);
      if(dto === null){
        this.router.navigate(['/login']);
      }
      else{
        this.dtoList = dto;
      }

    })
}

}
