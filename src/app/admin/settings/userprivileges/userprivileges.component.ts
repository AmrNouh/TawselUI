import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'app-userprivileges',
  templateUrl: './userprivileges.component.html',
  styleUrls: ['./userprivileges.component.css']
})
export class UserprivilegesComponent implements OnInit {

  pages: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
