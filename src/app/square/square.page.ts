import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-square',
  templateUrl: './square.page.html',
  styleUrls: ['./square.page.scss'],
})
export class SquarePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/ex01');
  }

}
