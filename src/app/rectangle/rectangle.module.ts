import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RectanglePageRoutingModule } from './rectangle-routing.module';

import { RectanglePage } from './rectangle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RectanglePageRoutingModule
  ],
  declarations: [RectanglePage]
})
export class RectanglePageModule {}
