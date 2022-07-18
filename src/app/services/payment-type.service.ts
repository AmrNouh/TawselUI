import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  private baseUrl:string = "https://localhost:44372/api"
  constructor(private http: HttpClient) { }

  getAll(): Observable<Payment[]>{
    return this.http.get<Payment[]>(`${this.baseUrl}/CashTypes`);
  }

  getById(id:number): Observable<Payment>{
    return this.http.get<Payment>(`${this.baseUrl}/CashTypes/${id}`);
  }


  insert(pay:Payment): void {
    this.http.post<Payment>(`${this.baseUrl}/CashTypes`,pay);
  }

  update(id:number,pay:Payment): void {
    this.http.put<Payment>(`${this.baseUrl}/CashTypes/${id}`,pay);
  }

  delete(id:number): void{
    this.http.delete<Payment>(`${this.baseUrl}/CashTypes/${id}`);
  }
}
