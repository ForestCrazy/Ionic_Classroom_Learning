import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.page.html',
  styleUrls: ['./ex02.page.scss'],
})
export class Ex02Page implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  divide() {
    this.nav.navigateForward('/ex021');
  }

  age() {
    this.nav.navigateForward('/ex022');
  }

}
