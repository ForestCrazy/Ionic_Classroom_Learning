import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-result2',
  templateUrl: './result2.page.html',
  styleUrls: ['./result2.page.scss'],
})
export class Result2Page implements OnInit {

  number1: number;
  number2: number;
  number3: number;

  constructor(private store: Storage) { }

  ngOnInit() {
    this.store.create();
    this.store.get('num1').then((n1) => {
      this.number1 = n1;
    });
    this.store.get('num2').then((n2) => {
      this.number2 = n2;
    });
    this.store.get('num3').then((n3) => {
      this.number3 = n3;
    });
  }

}
