import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {Branches} from "../../models/branches";
import {BranchesService} from "../../services/branches.service";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnDestroy {

  branches: Branches[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private branchesService: BranchesService) { }

  ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

  ngOnInit(): void {
    this.getAllBranches();
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
}
