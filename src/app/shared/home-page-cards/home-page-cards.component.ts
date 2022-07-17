import {Component, OnInit} from '@angular/core';
import {Status} from "../../models/status";
import {StatusService} from "../../services/status.service";
import {OrderService} from "../../services/order.service";
import {data} from "jquery";

@Component({
  selector: 'app-home-page-cards',
  templateUrl: './home-page-cards.component.html',
  styleUrls: ['./home-page-cards.component.css']
})
export class HomePageCardsComponent implements OnInit {

  statuses: Status[] = [];
  ordersCount: number = 0

  constructor(private statusService: StatusService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAllStatuses();
  }

  private getAllStatuses() {
    this.statusService
      .getAll()
      .subscribe((data) => {
        this.statuses = data
      }, (error) => {
        console.log(error);
      });
  }

  public getNumberOfProductByStatus(statusId:number) : any {
    this.orderService
      .filterByStatus(statusId)
      .subscribe((data) => {
        return data.length;
      },error => {
        console.log(error)
      })
  }
}
