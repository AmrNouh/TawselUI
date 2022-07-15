import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  left: string = "";
  collapse: string = "";

  constructor() {
  }

  ngOnInit(): void {
  }

  onLeftChanged($event: string) {
    this.collapse = $event === "0" ? "show" : "collapse";
    this.left = $event;
  }

}
