import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Users} from "../models/users";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BaseUrl="http://localhost:64344/api";
  private token = localStorage.getItem("token");

  constructor(private client:HttpClient) { }

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getToken(obj:Users)
  {
    return this.client.post(this.BaseUrl+"/Account/login",obj)
  }

  registerNewUser(obj:Users){
    return this.client.post(this.BaseUrl+"/Account/register",obj)
  }

}
