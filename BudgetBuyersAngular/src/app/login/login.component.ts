import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
customer=new Customer();
msg='';
  constructor(private registrationService:RegistrationService,private _router:Router) {
   }

  ngOnInit(): void {
  }

  loginUser(){
    this.registrationService.loginUserFromRemote(this.customer).subscribe(
      data=>{
        console.log("response received");
      this._router.navigate(['/homes']) }
      ,
      error=>{
        console.log("exception occured")
       this.msg="Bad credentials,please enter valid emailId and password";
      }
       );
  }
  /*
  gotoregistration(){
    this._router.navigate(['/registration'])
  }
  */

}
