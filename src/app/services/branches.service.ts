import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branches} from "../models/branches";

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  private BASEURL: string = "http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAll(): Observable<Branches[]>{
    return this.http.get<Branches[]>(`${this.BASEURL}/branches`);
  }

  getById(id:number):Observable<Branches>{
    return this.http.get<Branches>(`${this.BASEURL}/branches/${id}`);
  }

  insert(branch:Branches): void {
    this.http.post<Branches>(`${this.BASEURL}/branches`,branch);
  }

  update(id:number,branch:Branches): void {
    this.http.put<Branches>(`${this.BASEURL}/branches/${id}`,branch);
  }

  delete(id:number): void{
    this.http.delete<Branches>(`${this.BASEURL}/branches/${id}`);
  }
}
