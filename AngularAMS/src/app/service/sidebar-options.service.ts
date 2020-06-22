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
      {
        name: "Create an Assignment",
        link: "/teacher-create-dashboard",
        selected: selectedLink === "/teacher-create-dashboard"
      }
    ];

    return sidebarOptions;
  }

  loginRegisterSideOptions(selectedLink: string) {
    let sidebarOptions = [
      {
        name: "Login",
        link: "/login",
        selected: selectedLink === "/login"
      },
      {
        name: "Register",
        link: "/register",
        selected: selectedLink === "/register"
      }
    ];

    return sidebarOptions;
  }

  constructor() { }
}
