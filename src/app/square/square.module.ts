import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquarePageRoutingModule } from './square-routing.module';

import { SquarePage } from './square.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquarePageRoutingModule
  ],
  declarations: [SquarePage]
})
export class SquarePageModule {}
