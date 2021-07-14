import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkpagePage } from './linkpage.page';

const routes: Routes = [
  {
    path: '',
    component: LinkpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkpagePageRoutingModule {}
