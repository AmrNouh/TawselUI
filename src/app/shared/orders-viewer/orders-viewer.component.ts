import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Order} from "../../models/order";
import {OrderService} from "../../services/order.service";
import {Subject} from "rxjs";
import {DataTableDirective} from 'angular-datatables';

@Component({
  selector: 'app-orders-viewer',
  templateUrl: './orders-viewer.component.html',
  styleUrls: ['./orders-viewer.component.css']
})
export class OrdersViewerComponent implements OnInit,OnDestroy {

  status: string = "All";
  orders: Order[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(DataTableDirective, {static: false})
  datatableElement: any = DataTableDirective;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getFilteredOrders(this.status);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  public getFilteredOrders(filter: string) {
    if (filter.toLowerCase() === 'all') {
      this.getAllOrders();
    } else {
      this.orderService
        .filterByStatus(filter)
        .subscribe((data) => {
          this.orders = data
          this.dtTrigger.next(data);
        })
    }
  }

  private getAllOrders() {
    this.orderService
      .getAll()
      .subscribe((data) => {
        this.orders = data
        this.dtTrigger.next(data);
      })
  }
}
