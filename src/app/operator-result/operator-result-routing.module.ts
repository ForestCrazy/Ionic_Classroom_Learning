import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperatorResultPage } from './operator-result.page';

const routes: Routes = [
  {
    path: '',
    component: OperatorResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorResultPageRoutingModule {}
