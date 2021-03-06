import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'หน้าหลัก', url: '/home', icon: 'mail' },
    { title: 'LinkPage', url: '/linkpage', icon: 'paper-plane' },
    { title: 'input', url: '/input', icon: 'heart' },
    { title: 'Operator', url: '/operator', icon: 'archive' },
    { title: 'ControlIF', url: '/contrlif', icon: 'archive' },
    { title: 'ControlIFELSE', url: '/controlifelse', icon: 'archive' },
    { title: 'ControlIFELSEIFELSE', url: '/contrlifelseifelse', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = [{ title: 'Ex01', url: '/ex01', icon: 'mail' },{ title: 'Ex02', url: '/ex02', icon: 'mail' }];
  constructor() {}
}
