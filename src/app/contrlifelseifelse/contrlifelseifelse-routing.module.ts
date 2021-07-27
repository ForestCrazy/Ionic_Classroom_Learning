import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrlifelseifelsePage } from './contrlifelseifelse.page';

const routes: Routes = [
  {
    path: '',
    component: ContrlifelseifelsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrlifelseifelsePageRoutingModule {}
