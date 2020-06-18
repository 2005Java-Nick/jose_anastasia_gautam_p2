import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthorizationService} from '../../service/authorization.service'
import { SidebarOptionsService } from '../../service/sidebar-options.service';


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

  constructor(private sidebarOptionsService : SidebarOptionsService, private fb : FormBuilder) {
    this.sidebarOptions = sidebarOptionsService.loginRegisterSideOptions("/login");
  }

  submit() {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
