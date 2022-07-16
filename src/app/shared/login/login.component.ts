import { Component, OnInit } from '@angular/core';
import {Users} from "../../models/users";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: Users;
  errorMessage:string;
  isLogining: boolean ;
  passwordVisibility: boolean;
  fieldType: string;
  constructor(private accountServices:AccountService , private router:Router) {
    this.newUser = new Users();
    this.errorMessage = "";
    this.isLogining = false;
    this.passwordVisibility = false;
    this.fieldType = "Password";

  }

  ngOnInit(): void {
  }
  Login= new UntypedFormGroup({
    email:new UntypedFormControl("",[Validators.required,Validators.email]),
    password:new UntypedFormControl("",[Validators.required,Validators.minLength(8)]),
  })

  get Email(){
    return this.Login.get("email");
  }
  get Password(){
    return this.Login.get("password");
  }

  checkAuthentication(user:Users)
  {
    this.accountServices.getToken(user).subscribe(
      (data:any)=>{
        this.isLogining=true;
        localStorage.setItem('token',data.token)
        localStorage.setItem('userName',data.userName)

        console.log(data.token)
        setTimeout(() => {
          this.router.navigate(["/home"])
        }, 3000);
      },
      (err)=>{console.log(err)
        this.errorMessage = "Invalid User Name Or Password";
        this.isLogining=false;
      }


    );
  }

  showPassword() {
    this.passwordVisibility = !this.passwordVisibility;
    this.fieldType = this.passwordVisibility ? 'password' : 'text';
  }
}
