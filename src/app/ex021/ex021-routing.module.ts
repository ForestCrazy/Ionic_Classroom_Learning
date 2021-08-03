import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex021Page } from './ex021.page';

const routes: Routes = [
  {
    path: '',
    component: Ex021Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex021PageRoutingModule {}
