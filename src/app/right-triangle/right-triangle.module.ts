import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightTrianglePageRoutingModule } from './right-triangle-routing.module';

import { RightTrianglePage } from './right-triangle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightTrianglePageRoutingModule
  ],
  declarations: [RightTrianglePage]
})
export class RightTrianglePageModule {}
