import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contrlif',
  templateUrl: './contrlif.page.html',
  styleUrls: ['./contrlif.page.scss'],
})
export class ContrlifPage implements OnInit {
  num1: number;
  show: string;

  constructor() {}

  ngOnInit() {}

  gotoResult() {
    if (this.num1 > 50) {
      this.show = 'pass';
    }
    if (this.num1 < 50) {
      this.show = 'fail';
    }
  }
}
