import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import { SidebarOptionsService} from '../../service/sidebar-options.service';
import {AssignmentdtoService } from '../../service/assignmentdto.service';
import {Router} from '@angular/router';
import {AssignmentDTO} from '../../interface/assignmentdto.interface'

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  name = 'John Doe';
  viewer = 'Student';

  sidebarOptions;
  dtoList = [];
  listOfAssignments = [
    // {
    //   course: "History",
    //   assignmentType: "Exam",
    //   assignmentStatus: "New",
    //   assignmentName: "US History (1600s-1776)",
    //   teacherName: "Mrs. Jane Doe",
    //   studentName: "John Doe",
    //   dueDate: {
    //     date: "06-10-2020",
    //     time: "5:00 PM"
    //   },
    //   completionDate: {
    //     date: null,
    //     time: null
    //   },
    //   gradedDate: {
    //     date: "06-11-2020",
    //     time: "7:45 PM"
    //   },
    //   grade: null
    // }
  ];

  constructor(private sidebarOptionsService:SidebarOptionsService, private adtoService: AssignmentdtoService, private router: Router) { 
    
  }
  ngOnInit(): void {
    this.sidebarOptions = this.sidebarOptionsService.studentSideOptions("/student-dashboard");
    this.adtoService.getNewAssignmentsStudent().subscribe((dto)=>{
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
