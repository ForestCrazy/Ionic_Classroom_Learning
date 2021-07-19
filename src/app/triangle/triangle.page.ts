import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.page.html',
  styleUrls: ['./triangle.page.scss'],
})
export class TrianglePage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  gotoback() {
    this.nav.navigateBack('/ex01');
  }

}
