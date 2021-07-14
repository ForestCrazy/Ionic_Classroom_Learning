import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-operator-result',
  templateUrl: './operator-result.page.html',
  styleUrls: ['./operator-result.page.scss'],
})
export class OperatorResultPage implements OnInit {

  number1: any;
  number2: any;

  constructor(private store: Storage) { }

  ngOnInit() {
    this.store.create();
    this.store.get('num1').then((n1) => {
      console.log(n1);
      this.number1 = n1;
    });
    this.store.get('num2').then((n2) => {
      console.log(n2);
      this.number2 = n2;
    });
    }

}
