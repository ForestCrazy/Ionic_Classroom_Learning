import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex021PageRoutingModule } from './ex021-routing.module';

import { Ex021Page } from './ex021.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex021PageRoutingModule
  ],
  declarations: [Ex021Page]
})
export class Ex021PageModule {}
