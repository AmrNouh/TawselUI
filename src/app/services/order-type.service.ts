import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { OrderTypes } from '../models/order-types';

@Injectable({
  providedIn: 'root'
})
export class OrderTypeService {

  private BASEURL: string = "https://localhost:44372/api"
  private token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<OrderTypes[]>{
    return this.http.get<OrderTypes[]>(`${this.BASEURL}/OrderTypes`,this.requestOptions);
  }

  getById(id:number):Observable<OrderTypes>{
    return this.http.get<OrderTypes>(`${this.BASEURL}/OrderTypes/${id}`,this.requestOptions);
  }


  insert(orderType:OrderTypes): void {
    this.http.post<OrderTypes>(`${this.BASEURL}/OrderTypes`,orderType,this.requestOptions);
  }

  update(id:number,orderType:OrderTypes): void {
    this.http.put<OrderTypes>(`${this.BASEURL}/OrderTypes/${id}`,orderType,this.requestOptions);
  }

  delete(id:number): void{
    this.http.delete<OrderTypes>(`${this.BASEURL}/OrderTypes/${id}`,this.requestOptions);
  }
}
