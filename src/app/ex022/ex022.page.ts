import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex022',
  templateUrl: './ex022.page.html',
  styleUrls: ['./ex022.page.scss'],
})
export class Ex022Page implements OnInit {

  num1: number;
  str: string;

  constructor() { }

  ngOnInit() {
  }

  age() {
    if (this.num1 <= 10) {
      this.str = 'Children';
    } else if (this.num1 <= 20) {
      this.str = 'Teenage';
    } else if (this.num1 <= 35) {
      this.str = 'Adult';
    } else if (this.num1 <= 55) {
      this.str = 'Middle age';
    } else {
      this.str = 'Old age';
    }
  }

}
