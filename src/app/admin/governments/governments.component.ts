import {Component, OnDestroy, OnInit} from '@angular/core';
import {Government} from "../../models/government";
import {Subject} from "rxjs";
import {GovernmentService} from "../../services/government.service";
import {data} from "jquery";

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
  constructor(private governmentService: GovernmentService) {
  }

  ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

  ngOnInit(): void {
    this.getAllGovernments();
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
}
