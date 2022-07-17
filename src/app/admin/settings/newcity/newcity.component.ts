import {Component, OnInit} from '@angular/core';
import {Government} from "../../../models/government";
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newcity',
  templateUrl: './newcity.component.html',
  styleUrls: ['./newcity.component.css']
})
export class NewcityComponent implements OnInit {
  governments: Government[] = [];
  newCityForm!: UntypedFormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.newCityForm = this.formBuilder.group({
      government: new UntypedFormControl('', [Validators.required]),
      name: new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z|A-Z]+')]),
      shippingCost: new UntypedFormControl('', [Validators.required, Validators.min(0)])
    });
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

  createNewCity() {
    this.submitted = true;
    console.log(this.shippingCost);
  }
}
