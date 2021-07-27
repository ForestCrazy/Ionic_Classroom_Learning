import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlifelse',
  templateUrl: './controlifelse.page.html',
  styleUrls: ['./controlifelse.page.scss'],
})
export class ControlifelsePage implements OnInit {

  num1: number;
  discount: number;
  price: number;

  constructor() { }

  ngOnInit() {
  }

  calculateDiscount() {
    if (this.num1 > 5000) {
      this.discount = this.num1 * 0.05;
    } else {
      this.discount = 0;
    }
    this.price = this.num1 - this.discount;
  }

}
