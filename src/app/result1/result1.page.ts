import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-result1',
  templateUrl: './result1.page.html',
  styleUrls: ['./result1.page.scss'],
})
export class Result1Page implements OnInit {

  number1: number;
  number2: number;

  constructor(private store: Storage, private nav: NavController) { }

  ngOnInit() {
    this.store.create();
    this.store.get('num1').then((n1) => {
      this.number1 = n1;
    });
    this.store.get('num2').then((n2) => {
      this.number2 = n2;
    });
  }

  gotoBack() {
    this.nav.navigateBack('/ex01');
  }

}
