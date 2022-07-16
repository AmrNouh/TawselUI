import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Branches} from "../models/branches";

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  private BASEURL: string = "https://localhost:44372/api"

  constructor(private http:HttpClient) { }

  getAll(): Observable<Branches[]>{
    return this.http.get<Branches[]>(`${this.BASEURL}/Branches`);
  }

  getById(id:number):Observable<Branches>{
    return this.http.get<Branches>(`${this.BASEURL}/Branches/${id}`);
  }

  insert(branch:Branches): void {
    this.http.post<Branches>(`${this.BASEURL}/Branches`,branch);
  }

  update(id:number,branch:Branches): void {
    this.http.put<Branches>(`${this.BASEURL}/Branches/${id}`,branch);
  }

  delete(id:number): void{
    this.http.delete<Branches>(`${this.BASEURL}/Branches/${id}`);
  }
}
