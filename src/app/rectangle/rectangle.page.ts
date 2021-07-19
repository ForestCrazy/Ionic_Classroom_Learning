import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.page.html',
  styleUrls: ['./rectangle.page.scss'],
})
export class RectanglePage implements OnInit {

  num1: number;
  num2: number;

  constructor(private store: Storage, private route: Router, private nav: NavController) { }

  ngOnInit() {
  }

  gotoResult() {
    this.store.create();
    this.store.set('num1', this.num1);
    this.route.navigateByUrl('/result1');
  }

  gotoback() {
    this.nav.navigateBack('/ex01');
  }

}
