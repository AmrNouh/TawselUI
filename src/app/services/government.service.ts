import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Government} from "../models/government";
import { City } from '../models/city';
import { NewGov } from '../models/new-gov';

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  private BASEURL: string = "https://localhost:44372/api"
  private token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<Government[]>{
    return this.http.get<Government[]>(`${this.BASEURL}/States`,this.requestOptions);
  }

  getById(id:number):Observable<Government>{
    return this.http.get<Government>(`${this.BASEURL}/States/${id}`,this.requestOptions);
  }
  getGovernmentCities(id:number): Observable<City[]>{
    return this.http.get<City[]>(`${this.BASEURL}/States/cities/${id}`,this.requestOptions)
  }

  insert(government:NewGov) {
return    this.http.post<NewGov>(`${this.BASEURL}/States`,government,this.requestOptions);
  }

  update(id:number,government:Government) {
   return this.http.put<Government>(`${this.BASEURL}/States/${id}`,government,this.requestOptions);
  }

  delete(id:number){
  return  this.http.delete<Government>(`${this.BASEURL}/States/${id}`,this.requestOptions);
  }

}
