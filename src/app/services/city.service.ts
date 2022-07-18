import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { City } from '../models/city';
import { NewCity } from '../models/new-city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private BASEURL: string = "https://localhost:44372/api"
  constructor(private http:HttpClient) { }

  private token = localStorage.getItem("token");

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<City[]>{
    return this.http.get<City[]>(`${this.BASEURL}/Cities`,this.requestOptions);
  }

  getById(id:number):Observable<City>{
    return this.http.get<City>(`${this.BASEURL}/Cities/${id}`,this.requestOptions);
  }

  insert(city:City) {
   return this.http.post<City>(`${this.BASEURL}/Cities`,city,this.requestOptions);
  }
  insertNew(city:NewCity) {
    return this.http.post<NewCity>(`${this.BASEURL}/Cities`,city,this.requestOptions);
   }

  update(id:number,city:City): void {
    this.http.put<City>(`${this.BASEURL}/Cities/${id}`,city,this.requestOptions);
  }

  delete(id:number): void{
    this.http.delete<City>(`${this.BASEURL}/Cities/${id}`,this.requestOptions);
  }
}
