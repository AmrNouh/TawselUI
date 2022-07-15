import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {Branches} from "../models/branches";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl:string = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/orders`);
  }

  getById(id:number): Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}/orders/${id}`);
  }

  filterByStatus(status:string):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/orders?status=${status}`);
  }
  insert(order:Order): void {
    this.http.post<Order>(`${this.baseUrl}/orders`,order);
  }

  update(id:number,order:Order): void {
    this.http.put<Branches>(`${this.baseUrl}/orders/${id}`,order);
  }

  delete(id:number): void{
    this.http.delete<Order>(`${this.baseUrl}/orders/${id}`);
  }

}
