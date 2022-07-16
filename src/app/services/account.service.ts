import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Users} from "../models/users";
import { UserAccount } from '../models/user-account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private BaseUrl="https://localhost:44372/api";
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

  registerNewUser(obj:UserAccount){
    return this.client.post(this.BaseUrl+"/Account/register",obj)
  }

}
