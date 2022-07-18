import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../models/order";
import {Branches} from "../models/branches";
import { OrderData } from '../models/order-data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl:string = "https://localhost:44372/api"
  constructor(private http: HttpClient) { }

  getAll(): Observable<OrderData[]>{
    return this.http.get<OrderData[]>(`${this.baseUrl}/Orders`);
  }

  getById(id:number): Observable<OrderData>{
    return this.http.get<OrderData>(`${this.baseUrl}/Orders/${id}`);
  }

  filterByStatus(statusId:number):Observable<OrderData[]>{
    return this.http.get<OrderData[]>(`${this.baseUrl}/Orders/${statusId}`);
  }
  insert(order:OrderData) {
return    this.http.post<OrderData>(`${this.baseUrl}/orders`,order);
  }

  update(id:number,order:OrderData): void {
    this.http.put<Branches>(`${this.baseUrl}/orders/${id}`,order);
  }

  delete(id:number): void{
    this.http.delete<OrderData>(`${this.baseUrl}/orders/${id}`);
  }

}
