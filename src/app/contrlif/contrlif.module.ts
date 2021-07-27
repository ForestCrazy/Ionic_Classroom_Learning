import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrlifPageRoutingModule } from './contrlif-routing.module';

import { ContrlifPage } from './contrlif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrlifPageRoutingModule
  ],
  declarations: [ContrlifPage]
})
export class ContrlifPageModule {}
