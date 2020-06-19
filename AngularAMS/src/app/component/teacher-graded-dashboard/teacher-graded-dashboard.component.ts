import { Component, OnInit } from '@angular/core';
import { AssignmentInstanceDisplay } from '../../interface/assignmentinstancedisplay.interface';
import {SidebarOptionsService} from '../../service/sidebar-options.service';
import {AssignmentdtoService } from '../../service/assignmentdto.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-teacher-graded-dashboard',
  templateUrl: './teacher-graded-dashboard.component.html',
  styleUrls: ['./teacher-graded-dashboard.component.css']
})
export class TeacherGradedDashboardComponent implements OnInit {

  name = 'Mrs. Jane Doe';
  viewer = 'Teacher';

  sidebarOptions;

  listOfAssignments =[]
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


  constructor(private sidebarOptionsService:SidebarOptionsService, private adtoService: AssignmentdtoService, private router: Router) { 
    this.sidebarOptions = sidebarOptionsService.teacherSideOptions("/teacher-graded-dashboard");
  }

  ngOnInit(): void {
    this.adtoService.getAllGradedAssignmentsStudent().subscribe((dto)=>{
      console.log('List of assignment is ' + dto);
      if(dto === null){
        this.router.navigate(['/login']);
      }
      else{
        this.listOfAssignments = dto;
      }

    })
}

}
