import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  left: string = '0';
  @Output() changeLeft = new EventEmitter<string>();

  ngOnInit(): void {
  }

  changeWidth() : void {
    console.log(this.left);
    this.left = this.left === "260px" ? "0" : "260px";
    this.changeLeft.emit(this.left);
  }
}
