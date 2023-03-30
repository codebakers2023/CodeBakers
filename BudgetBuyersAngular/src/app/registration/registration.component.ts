import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
customer=new Customer();
msg="";
  constructor(private registrationService: RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.registrationService.registerUserFromRemote(this.customer).subscribe(
     data=>{ console.log("response received");
      this._router.navigate(['/login']);}
    ,
      error=>{
        console.log("exception occured")
       this.msg=error.error;
      }
    );
  }

}
