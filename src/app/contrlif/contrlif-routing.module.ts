import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrlifPage } from './contrlif.page';

const routes: Routes = [
  {
    path: '',
    component: ContrlifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrlifPageRoutingModule {}
