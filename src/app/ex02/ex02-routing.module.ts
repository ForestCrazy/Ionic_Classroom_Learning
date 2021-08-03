import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex02Page } from './ex02.page';

const routes: Routes = [
  {
    path: '',
    component: Ex02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex02PageRoutingModule {}
