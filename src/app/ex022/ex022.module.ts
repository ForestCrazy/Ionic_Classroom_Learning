import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex022PageRoutingModule } from './ex022-routing.module';

import { Ex022Page } from './ex022.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex022PageRoutingModule
  ],
  declarations: [Ex022Page]
})
export class Ex022PageModule {}
