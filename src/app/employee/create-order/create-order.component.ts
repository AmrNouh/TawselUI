import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Government} from "../../models/government";
import {ShippingType} from "../../models/shipping-type";
import {Branches} from "../../models/branches";
import {GovernmentService} from "../../services/government.service";
import {CityService} from "../../services/city.service";
import {OrderService} from "../../services/order.service";
import {ShippingTypeService} from "../../services/shipping-type.service";
import {PaymentTypeService} from "../../services/payment-type.service";
import {OrderTypes} from "../../models/order-types";
import {City} from "../../models/city";
import {Payment} from "../../models/payment";
import { OrderTypeService } from 'src/app/services/order-type.service';
import { BranchesService } from 'src/app/services/branches.service';
import { Guid } from 'guid-typescript';
import {OrderData} from "../../models/order-data";
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  createOrderForm!: UntypedFormGroup;
  submitted: boolean = false;
  orderTypes: OrderTypes[] = [];
  governments: Government[] = [];
  cities: City[] = [];
  shippingMethods: ShippingType[] = [];
  paymentMethods: Payment[] = [];
  branches: Branches[] = [];
  isShippableToVillage: boolean = false;
  numberOfProducts:number = 0;
  serialNumber:Guid=Guid.create();
  myDate = new Date();
  newOrder:OrderData=new OrderData();
  newCustomer:Customer=new Customer();
  createdCustomerId:number=0;
  currentuser:any=localStorage.getItem("userId")?.toString();
  ngOnInit(): void {
    this.createOrderForm = this.formBuilder.group({
      orderType: new UntypedFormControl('', [Validators.required]),
      customerName: new UntypedFormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-z|A-Z]+')]),
      phoneNumber1: new UntypedFormControl('',[Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]),
      phoneNumber2: new UntypedFormControl('',[Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]),
      email: new UntypedFormControl('',[Validators.required,Validators.email]),
      government: new UntypedFormControl('',[Validators.required]),
      city: new UntypedFormControl('',[Validators.required]),
      street: new UntypedFormControl('',[Validators.required]),
      shippingMethod: new UntypedFormControl('',[Validators.required]),
      paymentMethod: new UntypedFormControl('',[Validators.required]),
      branch: new UntypedFormControl('',[Validators.required]),
      orderCost: new UntypedFormControl('',[Validators.required]),
      totalWeight: new UntypedFormControl('',[Validators.required]),
      traderPhoneNumber: new UntypedFormControl('',[Validators.required,Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\./0-9]*$')]),
      traderAddress: new UntypedFormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-z|A-Z|0-9]+')]),
    });
    this.getAllGovernments();
    this.getAllShippingTypes();
    this.getAllPaymentMetods();

    this.getAllBranches()
    this.getAllOrderTypes();
    
  }


  get orderType(){
    return this.createOrderForm.get('orderType');
  }
  get customerName(){
    return this.createOrderForm.get('customerName');
  }
  get phoneNumber1(){
    return this.createOrderForm.get('phoneNumber1');
  }
  get phoneNumber2(){
    return this.createOrderForm.get('phoneNumber2');
  }
  get email(){
    return this.createOrderForm.get('email');
  }
  get government(){
    return this.createOrderForm.get('government');
  }
  get city(){
    return this.createOrderForm.get('city');
  }
  get street(){
    return this.createOrderForm.get('street');
  }
  get shippingMethod(){
    return this.createOrderForm.get('shippingMethod');
  }
  get paymentMethod(){
    return this.createOrderForm.get('paymentMethod');
  }
  get branch(){
    return this.createOrderForm.get('branch');
  }
  get orderCost(){
    return this.createOrderForm.get('orderCost');
  }
  get totalWeight(){
    return this.createOrderForm.get('totalWeight');
  }
  get traderPhoneNumber(){
    return this.createOrderForm.get('traderPhoneNumber');
  }
  get traderAddress(){
    return this.createOrderForm.get('traderAddress');
  }

  constructor(
    private governmentService: GovernmentService,
    private cityService: CityService,
    private orderService: OrderService,
    private shippingService: ShippingTypeService,
    private paymentService: PaymentTypeService,
    private formBuilder: UntypedFormBuilder,
    private getorderType: OrderTypeService,
    private Branchservice: BranchesService,
    private customerservice: CustomerService,



  ) {
  }

  createOrder(
    ordertype:number,
    customer:string,
     Phone1:string,
     Phone2:string ,
     email:string,
     stateId:number,
     cityId:number,
     shipId:number,
     PayId:number,
     branchID:number,
     ordercost:string
     ) {
      
this.newOrder.serialNumber=this.serialNumber.toString();
this.newOrder.date=formatDate(this.myDate, 'yyyy-MM-dd', 'en-US').toString();
this.newOrder.Cost=parseInt(ordercost);
this.newOrder.weight=2;
this.newOrder.stateId=stateId;
this.newOrder.cityId=cityId;

this.newCustomer.name=customer;
this.newCustomer.cityId=cityId;
this.newCustomer.stateId=stateId;
this.newCustomer.email=email;
this.newCustomer.phone1=Phone1;
this.newCustomer.phone2=Phone2;

this.customerservice.insert(this.newCustomer).subscribe(
  (data:any)=>{console.log(data);
    this.createdCustomerId=data.id;
  },
  ()=>{}
)
this.newOrder.clientId=3;
this.newOrder.shipId=shipId;
this.newOrder.cashId=PayId;
this.newOrder.statusId=1;
this.newOrder.orderType=ordertype;
this.newOrder.userId=this.currentuser;


console.log(this.newOrder);

this.orderService.insert(this.newOrder).subscribe(
  (data)=>{console.log(data);
    alert("Order Added Successfully")
    this.ngOnInit();
  },
  (err)=>{
    console.log(err);
    alert("Error Occured")

  }
)

  }

  getAllOrderTypes() {
    this.getorderType.getAll().subscribe(data => {
      this.orderTypes = data;
    })
  }

  private getAllGovernments() {
    this.governmentService.getAll().subscribe(data => {
      this.governments = data;
    })
  }

  loadGovernmentCities(govId:number){

    this.governmentService.getGovernmentCities(govId).subscribe(
      (data)=>{this.cities=data
      console.log(data)
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  private getAllShippingTypes() {
    this.shippingService.getAll().subscribe(data => {
      this.shippingMethods = data;
    })
  }

  filterCitiesByGovernmentId(governmentId: number) {

  }

  private getAllBranches() {
    this.Branchservice.getByStatus().subscribe(data => {
      this.branches = data;
    })
  }

  private getAllPaymentMetods()
  {
    this.paymentService.getAll().subscribe(data => {
      this.paymentMethods = data;
    })
  }

  newProduct() {
    this.numberOfProducts++
  }


}
