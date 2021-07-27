import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrlifelseifelsePageRoutingModule } from './contrlifelseifelse-routing.module';

import { ContrlifelseifelsePage } from './contrlifelseifelse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrlifelseifelsePageRoutingModule
  ],
  declarations: [ContrlifelseifelsePage]
})
export class ContrlifelseifelsePageModule {}
