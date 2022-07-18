import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Status} from "../models/status";

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private BASEURL: string = "https://localhost:44372/api"

  private token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<Status[]>{
    return this.http.get<Status[]>(`${this.BASEURL}/Status`,this.requestOptions);
  }

  getById(id:number):Observable<Status>{
    return this.http.get<Status>(`${this.BASEURL}/Status/${id}`,this.requestOptions);
  }

  insert(status:Status): void {
    this.http.post<Status>(`${this.BASEURL}/Status`,status,this.requestOptions);
  }

  update(id:number,status:Status): void {
    this.http.put<Status>(`${this.BASEURL}/Status/${id}`,status,this.requestOptions);
  }

  delete(id:number): void{
    this.http.delete<Status>(`${this.BASEURL}/Status/${id}`,this.requestOptions);
  }
}
