import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightTrianglePage } from './right-triangle.page';

const routes: Routes = [
  {
    path: '',
    component: RightTrianglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightTrianglePageRoutingModule {}
