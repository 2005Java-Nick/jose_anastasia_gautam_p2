import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SidebarOptionsService {

  studentSideOptions(selectedLink: string) {

    let sidebarOptions = [
      {
        name: "New Assignments",
        link: "/student-dashboard",
        selected: selectedLink === "/student-dashboard"
      },
      {
        name: "Completed Assignments",
        link: "/student-completed-dashboard",
        selected: selectedLink === "/student-completed-dashboard"
      },
      {
        name: "Graded Assignments",
        link: "/student-graded-dashboard",
        selected: selectedLink === "/student-graded-dashboard"
      },
    ];

    return sidebarOptions;
  }

  teacherSideOptions(selectedLink: string) {

    let sidebarOptions = [
      {
        name: "Completed Assignments",
        link: "/teacher-dashboard",
        selected: selectedLink === "/teacher-dashboard"
      },
      {
        name: "Graded Assignments",
        link: "/teacher-graded-dashboard",
        selected: selectedLink === "/teacher-graded-dashboard"
      },
      // ADD CREATE AN ASSIGNMENT!!!!!!!!!!!!
    ];

    return sidebarOptions;
  }

  constructor() { }
}
