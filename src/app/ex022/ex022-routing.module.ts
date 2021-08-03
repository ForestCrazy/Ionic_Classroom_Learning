import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex022Page } from './ex022.page';

const routes: Routes = [
  {
    path: '',
    component: Ex022Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex022PageRoutingModule {}
