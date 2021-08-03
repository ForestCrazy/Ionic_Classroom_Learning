import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex021',
  templateUrl: './ex021.page.html',
  styleUrls: ['./ex021.page.scss'],
})
export class Ex021Page implements OnInit {

  str: string;
  num1: number;

  constructor() { }

  ngOnInit() {
  }

  divide() {
    if (this.num1 % 5 == 0) {
      this.str = this.num1 + ' is divisible by 5. ';
    } else {
      this.str = this.num1 + ' is not divisible by 5. ';
    }
  }

}
