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
}
