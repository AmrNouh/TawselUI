import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private BASEURL: string = "https://localhost:44372/api"
  private token = localStorage.getItem("token");

  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  private requestOptions = { headers: this.headers };

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.BASEURL}/Clients`,this.requestOptions);
  }

  getById(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.BASEURL}/Clients/${id}`,this.requestOptions);
  }


  insert(customer:Customer){
    return   this.http.post(`${this.BASEURL}/Clients`,customer,this.requestOptions);
  }

  update(id:number,customer:Customer): void {
    this.http.put<Customer>(`${this.BASEURL}/Clients/${id}`,customer,this.requestOptions);
  }

  delete(id:number): void{
    this.http.delete<Customer>(`${this.BASEURL}/Clients/${id}`,this.requestOptions);
  }
}
