import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Government} from "../models/government";

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  private BASEURL: string = "http://localhost:3000"
  constructor(private http: HttpClient) {}

  getAll(): Observable<Government[]>{
    return this.http.get<Government[]>(`${this.BASEURL}/governments`);
  }

  getById(id:number):Observable<Government>{
    return this.http.get<Government>(`${this.BASEURL}/governments/${id}`);
  }

  insert(government:Government): void {
    this.http.post<Government>(`${this.BASEURL}/governments`,government);
  }

  update(id:number,government:Government): void {
    this.http.put<Government>(`${this.BASEURL}/governments/${id}`,government);
  }

  delete(id:number): void{
    this.http.delete<Government>(`${this.BASEURL}/governments/${id}`);
  }

}
