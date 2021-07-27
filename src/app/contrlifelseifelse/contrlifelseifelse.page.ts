import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrlifelseifelse',
  templateUrl: './contrlifelseifelse.page.html',
  styleUrls: ['./contrlifelseifelse.page.scss'],
})
export class ContrlifelseifelsePage implements OnInit {

  num1: number;
  discount: number;
  price: number;

  constructor() { }

  ngOnInit() {
  }

  calculateDiscount() {
    if (this.num1 > 10000) {
      this.discount = this.num1 * 0.05;
    } else if (this.num1 > 5000) {
      this.discount = this.num1 * 0.03;
    } else {
      this.discount = 0;
    }
    this.price = this.num1 - this.discount;
  }

}
