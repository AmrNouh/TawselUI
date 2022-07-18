import {Component, OnDestroy, OnInit} from '@angular/core';
import {Government} from "../../models/government";
import {Subject} from "rxjs";
import {GovernmentService} from "../../services/government.service";
import {data} from "jquery";
import { NewGov } from 'src/app/models/new-gov';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-governments',
  templateUrl: './governments.component.html',
  styleUrls: ['./governments.component.css']
})
export class GovernmentsComponent implements OnInit, OnDestroy {

  allGovernments: Government[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
UpdatedGovernoment:Government=new Government();
newGovernoment:NewGov=new NewGov();


  constructor(private governmentService: GovernmentService) {
  }

  ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

  ngOnInit(): void {
    this.getAllGovernments();
  }

  validation=new UntypedFormGroup({
    Name:new UntypedFormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),


  })


  get GovName(){
    return this.validation.get("Name");
  }




  getAllGovernments() {
    this.governmentService
      .getAll()
      .subscribe((data) => {
        this.allGovernments = data;
        this.dtTrigger.next(data);
      }, error => {
        console.log(error)
      })
  }
  updateGovernment(id:number)
  {
    this.governmentService.getById(id).subscribe(
      (data)=>{
        console.log(data);
        this.UpdatedGovernoment=data;
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }
  saveUpdate()
  {
    this.governmentService.update(this.UpdatedGovernoment.id,this.UpdatedGovernoment).subscribe(
      (data)=>{
        console.log(data);
        alert("Governorate Updated Successfully")
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);

        alert("Error Ocuured")

      }
    )
  }

  saveNew(){

  
 console.log(this.newGovernoment);
 this.governmentService.insert(this.newGovernoment).subscribe(
  (data)=>{
    console.log(data);
    alert("Government Added Successfully")
    this.ngOnInit();
  },
  (err)=>{
    console.log(data);
    alert(" Error Ocured ")
    
  }
 )
  }



  deleteGovernment(id:number)
  {
    if (confirm("Are you sure to delete this Government")==true)
    {
      this.governmentService.delete(id).subscribe(
        (data)=>{
          console.log(data);
          alert("Government Deleted Successfully")
          this.ngOnInit();
        },
        (err)=>{
          console.log(data);
          alert(" Error Ocured ")
          
        }
      )
    }
  }

}

