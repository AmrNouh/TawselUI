import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {Subject} from "rxjs";
import {DataTableDirective} from 'angular-datatables';
import {Status} from "../../models/status";
import {StatusService} from "../../services/status.service";

@Component({
  selector: 'app-orders-viewer',
  templateUrl: './orders-viewer.component.html',
  styleUrls: ['./orders-viewer.component.css']
})
export class OrdersViewerComponent implements OnInit,OnDestroy {

  statuses: Status[] = [];
  statusId: number = 0;
  orders: Order[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;

  constructor(private orderService: OrderService,private statusService : StatusService) {
  }

  ngOnInit(): void {
    this.getFilteredOrders(this.statusId);
    this.getAllStatuses();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  public getFilteredOrders(filter: number) {
    if (filter === 0) {
      this.getAllOrders();
    } else {
      this.orderService
        .filterByStatus(filter)
        .subscribe((data) => {
          // this.orders = data
          this.dtTrigger.next(data);
        })
    }
  }

  private getAllOrders() {
    this.orderService
      .getAll()
      .subscribe((data) => {
        // this.orders = data
        this.dtTrigger.next(data);
      })
  }

  private getAllStatuses() {
    this.statusService
      .getAll()
      .subscribe((data) => {
        this.statuses = data;
      },(errors) => {
        console.log(errors)
      })
  }
}
