import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Report} from "../models/report";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private BaseUrl = "https://localhost:44372/api";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Report[]>{
    return this.http.get<Report[]>(`${this.BaseUrl}/Reports`);
  }
}
