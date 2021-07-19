import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Result1Page } from './result1.page';

const routes: Routes = [
  {
    path: '',
    component: Result1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Result1PageRoutingModule {}
