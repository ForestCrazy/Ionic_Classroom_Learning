import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RectanglePage } from './rectangle.page';

const routes: Routes = [
  {
    path: '',
    component: RectanglePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RectanglePageRoutingModule {}
