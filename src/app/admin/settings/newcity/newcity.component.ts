import {Component, OnInit} from '@angular/core';
import {Government} from "../../../models/government";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import { CityService } from 'src/app/services/city.service';
import { GovernmentService } from 'src/app/services/government.service';
import { City } from 'src/app/models/city';
import { NewCity } from 'src/app/models/new-city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcity',
  templateUrl: './newcity.component.html',
  styleUrls: ['./newcity.component.css']
})
export class NewcityComponent implements OnInit {
  governments: Government[] = [];
  newCityForm!: UntypedFormGroup;
  submitted: boolean = false;
  newCity:NewCity=new NewCity();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private cityservice:CityService,
    private governmentservice:GovernmentService,

    ) {
  }

  ngOnInit(): void {
    this.newCityForm = this.formBuilder.group({
      government: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z|A-Z]+')]),
      shippingCost: new UntypedFormControl('', [Validators.required, Validators.min(0)])
    });
this.getallGovernments()

  }

  get government() {
    return this.newCityForm.get('government');
  }

  get name() {
    return this.newCityForm.get('name');
  }

  get shippingCost() {
    return this.newCityForm.get('shippingCost');
  }

  createNewCity(governmentId:number,name:string,cost:number) {

    this.submitted = true;
    console.log(this.shippingCost);
    this.newCity.stateId=governmentId;
    this.newCity.name=name;
    this.newCity.costPerCity=cost;
    console.log(this.newCity);
    
    this.cityservice.insertNew(this.newCity).subscribe(
      (data)=>{
        console.log(data);
        alert("City Added Successfully")
         this.ngOnInit();
      },
      (err)=>{
        console.log(err);
        alert("Error Ocurred")

        
      }
    )


  }


getallGovernments()
{
this.governmentservice.getAll().subscribe(
  (data)=>{
    console.log(data);
    this.governments=data;
  },
  (err)=>{
    console.log(err);

  }
)
}


}
