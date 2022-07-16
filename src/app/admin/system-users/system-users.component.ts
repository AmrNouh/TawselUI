import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {UserAccount} from "../../models/user-account";

@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.css']
})
export class SystemUsersComponent implements OnInit {

  newAccount: UserAccount;
  constructor(private accountService:AccountService , private router:Router) {
    this.newAccount = new UserAccount();
  }

  ngOnInit(): void {
  }

  registration=new UntypedFormGroup({
    fullname:new UntypedFormControl("",[Validators.required,Validators.minLength(6),Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    username:new UntypedFormControl("",Validators.required),
    email:new UntypedFormControl("",[Validators.required,Validators.email]),
    password:new UntypedFormControl("",[Validators.required,Validators.minLength(8)]),

  })


  get Fullname(){
    return this.registration.get("fullname");
  }
  get UserName(){
    return this.registration.get("username");
  }
  get Email(){
    return this.registration.get("email");
  }

  get Password(){
    return this.registration.get("password");
  }

  createUser(fullName:string,userName:string,email:string,password:string,permissionId:number){
    console.log(permissionId);
    this.newAccount.full_Name = fullName;
    this.newAccount.email = email;
    this.newAccount.userName = userName;
    this.newAccount.password = password;
    this.newAccount.permissionId = permissionId;
    this.accountService.registerNewUser(this.newAccount).subscribe(
      (data)=>{
        // this.router.navigate(["/login"])
      },
      (err)=>{
        console.log(err)
      }
    )

  }

}
