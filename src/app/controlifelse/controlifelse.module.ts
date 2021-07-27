import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlifelsePageRoutingModule } from './controlifelse-routing.module';

import { ControlifelsePage } from './controlifelse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlifelsePageRoutingModule
  ],
  declarations: [ControlifelsePage]
})
export class ControlifelsePageModule {}
