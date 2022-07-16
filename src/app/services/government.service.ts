import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Government} from "../models/government";

@Injectable({
  providedIn: 'root'
})
export class GovernmentService {

  private BASEURL: string = "https://localhost:44372/api"
  constructor(private http: HttpClient) {}

  getAll(): Observable<Government[]>{
    return this.http.get<Government[]>(`${this.BASEURL}/States`);
  }

  getById(id:number):Observable<Government>{
    return this.http.get<Government>(`${this.BASEURL}/States/${id}`);
  }

  insert(government:Government): void {
    this.http.post<Government>(`${this.BASEURL}/States`,government);
  }

  update(id:number,government:Government): void {
    this.http.put<Government>(`${this.BASEURL}/States/${id}`,government);
  }

  delete(id:number): void{
    this.http.delete<Government>(`${this.BASEURL}/States/${id}`);
  }

}
