import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.page.html',
  styleUrls: ['./ex01.page.scss'],
})
export class Ex01Page implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  redirectPage(pageName) {
    this.nav.navigateForward(pageName);
  }

}
