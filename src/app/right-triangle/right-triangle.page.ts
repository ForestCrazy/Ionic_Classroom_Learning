import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-right-triangle',
  templateUrl: './right-triangle.page.html',
  styleUrls: ['./right-triangle.page.scss'],
})
export class RightTrianglePage implements OnInit {

  num1: number;
  num2: number;
  num3: number;

  constructor(private store: Storage, private route: Router, private nav: NavController) { }

  ngOnInit() {
  }

  gotoResult() {
    this.store.create();
    this.store.set('num1', this.num1);
    this.store.set('num2', this.num2);
    this.store.set('num3', this.num3);
    this.route.navigateByUrl('result2');
  }

  gotoback() {
    this.nav.navigateBack('/ex01');
  }

}
