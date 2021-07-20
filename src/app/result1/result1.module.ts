import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Result1PageRoutingModule } from './result1-routing.module';

import { Result1Page } from './result1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Result1PageRoutingModule
  ],
  declarations: [Result1Page]
})
export class Result1PageModule {}
