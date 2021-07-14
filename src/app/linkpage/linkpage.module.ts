import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkpagePageRoutingModule } from './linkpage-routing.module';

import { LinkpagePage } from './linkpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkpagePageRoutingModule
  ],
  declarations: [LinkpagePage]
})
export class LinkpagePageModule {}
