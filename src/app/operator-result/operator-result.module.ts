import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperatorResultPageRoutingModule } from './operator-result-routing.module';

import { OperatorResultPage } from './operator-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperatorResultPageRoutingModule
  ],
  declarations: [OperatorResultPage]
})
export class OperatorResultPageModule {}
