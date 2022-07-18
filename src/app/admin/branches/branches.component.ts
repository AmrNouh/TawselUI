import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import {Branches} from "../../models/branches";
import {BranchesService} from "../../services/branches.service";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnDestroy {

  branches: Branches[] = [];
  cities: City[] = [];
   UpdatedBranch:Branches=new Branches();

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private branchesService: BranchesService,
    private cityCervice: CityService,
    
    ) { }

  ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

  ngOnInit(): void {
    this.getAllBranches();
    this.getAllcities();

  }

  private getAllBranches(): void {
    this.branchesService
      .getAll()
      .subscribe((data) => {
        this.branches = data;
        this.dtTrigger.next(data);
      }, error => {
        console.log(error)
      })
  }

private getAllcities()
{
  this.cityCervice.getAll().subscribe(
    (data)=>{
console.log(data);
this.cities=data;
    },
    (err)=>{
console.log(err);

    }
  )
}


public getUpdateBranche(id:number)
{
  this.branchesService.getById(id).subscribe(
    (data)=>{
      console.log(data);
      this.UpdatedBranch=data
    },
    (err)=>{
      console.log(err);

    }
  )

}
public SaveUpdate()
{
  this.branchesService.update(this.UpdatedBranch.id,this.UpdatedBranch).subscribe(
    (data)=>{
      console.log(data);
      alert("Branch Updated Successfully")
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);

      alert("Error Ocuured")

    }
  )
}
public DeleteBranche(id:number){
  if (confirm("Are You sure To Delete this Branch")==true)
  {
    this.branchesService.delete(id).subscribe(
      (data)=>{
        console.log(data);
        alert("Branch Deleted Successfully")
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
    
        alert("Error Ocuured")
    
      }
    )
  }


}
}
