import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branches} from "../models/branches";

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  private BASEURL: string = "https://localhost:44372/api"
  constructor(private http:HttpClient) { }

  private token = localStorage.getItem("token");

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<Branches[]>{
    return this.http.get<Branches[]>(`${this.BASEURL}/Branches`,this.requestOptions);
  }

  getById(id:number):Observable<Branches>{
    return this.http.get<Branches>(`${this.BASEURL}/Branches/${id}`,this.requestOptions);
  }

  getByStatus():Observable<Branches[]>{
    return this.http.get<Branches[]>(`${this.BASEURL}/Branches/statustrue`,this.requestOptions);
  }

  insert(branch:Branches): void {
    this.http.post<Branches>(`${this.BASEURL}/Branches`,branch,this.requestOptions);
  }

  update(id:number,branch:Branches) {
    return this.http.put<Branches>(`${this.BASEURL}/Branches/${id}`,branch,this.requestOptions);
  }

  delete(id:number){
  return  this.http.delete<Branches>(`${this.BASEURL}/Branches/${id}`,this.requestOptions);
  }
}
