import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ShippingType } from '../models/shipping-type';

@Injectable({
  providedIn: 'root'
})
export class ShippingTypeService {

  private baseUrl:string = "https://localhost:44372/api"
  constructor(private http: HttpClient) { }

  getAll(): Observable<ShippingType[]>{
    return this.http.get<ShippingType[]>(`${this.baseUrl}/ShippingTypes`);
  }

  getById(id:number): Observable<ShippingType>{
    return this.http.get<ShippingType>(`${this.baseUrl}/ShippingTypes/${id}`);
  }


  insert(shipType:ShippingType): void {
    this.http.post<ShippingType>(`${this.baseUrl}/ShippingTypes`,shipType);
  }

  update(id:number,shipType:ShippingType): void {
    this.http.put<ShippingType>(`${this.baseUrl}/ShippingTypes/${id}`,shipType);
  }

  delete(id:number): void{
    this.http.delete<ShippingType>(`${this.baseUrl}/ShippingTypes/${id}`);
  }

}