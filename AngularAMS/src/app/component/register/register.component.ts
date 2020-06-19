import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SidebarOptionsService } from '../../service/sidebar-options.service';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isStudent = true;

  registerTeacherForm: FormGroup = this.fb.group({
    teacherId: [''],
    teacherFirstName: [''],
    teacherLastName: [''],
    teacherEmail: [''],
    teacherPassword: [''],
    teacherSubject: [''],
    teacherSchool: [''],
});


registerStudentForm: FormGroup = this.fb.group({
  studentId: [''],
  studentFirstName: [''],
  studentLastName: [''],
  studentEmail: [''],
  studentPassword: [''],
  studentClass: [''],
  studentSchool: [''],
});

sidebarOptions;

headerTitle: string = "Welcome";

constructor(private sidebarOptionsService : SidebarOptionsService, private fb: FormBuilder, private registerService: RegisterService) {
  this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions('/register');
}

submit() {
  if (this.isStudent) {
    console.log(this.registerStudentForm.value);
    this.registerService.registerStudent(this.registerStudentForm.value);
  } else {
    console.log(this.registerTeacherForm.value);
    this.registerService.registerTeacher(this.registerTeacherForm.value);
  }
}

// submit() {
//   console.log(this.loginForm.value);
//   this.loginService.login(this.loginForm.value);
// }

setUser(userType: boolean) {
  this.isStudent = userType;
}



  ngOnInit(): void {
  }

}
