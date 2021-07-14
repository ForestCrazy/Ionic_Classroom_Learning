import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.page.html',
  styleUrls: ['./operator.page.scss'],
})
export class OperatorPage implements OnInit {

  num1: any;
  num2: any;
  sum: number;
  minus: number;
  multiply: number;
  divide: number;
  modular: number;

  constructor(private store: Storage, private router: Router) { }

  ngOnInit() {
  }

  result() {
    this.sum = this.num1 + this.num2;
    this.minus = this.num1 - this.num2;
    this.multiply = this.num1 * this.num2;
    this.divide = this.num1 / this.num2;
    this.modular = this.num1 % this.num2;
  }

  gotoresult() {
    this.store.create();
    this.store.set('num1', this.num1);
    this.store.set('num2', this.num2);
    this.router.navigateByUrl('/operator-result');
  }

}
