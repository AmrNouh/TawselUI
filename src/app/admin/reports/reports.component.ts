import {Component, OnDestroy, OnInit,ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ReportsService} from "../../services/reports.service";
import {Subject} from "rxjs";
import {DataTableDirective} from 'angular-datatables';
import {Report} from "../../models/report";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, OnDestroy {

  searchForm!: UntypedFormGroup;
  submitted: boolean = false;
  orderStatus: any;
  allReports: Report[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;

  constructor(private formBuilder: UntypedFormBuilder, private reportService: ReportsService) {
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    // validation
    this.searchForm = this.formBuilder.group({
      orderStatus: new UntypedFormControl('', [Validators.required]),
      fromDate: new UntypedFormControl('', [Validators.required]),
      toDate: new UntypedFormControl('', [Validators.required])
    });
    this.getReports();
  }

  get OrderStatus() {
    return this.searchForm.get("orderStatus");
  }

  get FromData() {
    return this.searchForm.get("fromDate");
  }

  get ToDate() {
    return this.searchForm.get("toDate");
  }

  getReports(): void {
    this.reportService
      .getAll()
      .subscribe((data: any) => {
        this.allReports = data;
        this.dtTrigger.next(data);
      });
  }

  onSearch() {
    this.submitted = true;
    console.log(this.searchForm.invalid)
    if (this.searchForm.invalid)
      return;

  }
}
