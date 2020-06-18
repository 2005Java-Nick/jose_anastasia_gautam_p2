import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthorizationService} from '../../service/authorization.service'
import { SidebarOptionsService } from '../../service/sidebar-options.service';
import {LoginService } from '../../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginForm : FormGroup = this.fb.group({
      userId: [''],
      userPassword: ['']
  });

  sidebarOptions;

  headerTitle : string = "Welcome";

  constructor(private sidebarOptionsService : SidebarOptionsService, private fb : FormBuilder, 
    private authorizationService: AuthorizationService, private loginService: LoginService) {
    
  }

  submit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value);
  }

  ngOnInit(): void {
    this.sidebarOptions = this.sidebarOptionsService.loginRegisterSideOptions("/login");
    this.authorizationService.reset();
    console.log('Fixed Sidebar Option and reset token');
  }

}
