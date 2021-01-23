import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxesRoutingModule } from './boxes-routing.module';
import { BoxesComponent } from './boxes.component';
import { DiarycardDirective } from '../directives/diary/diarycard.directive' ;


@NgModule({
  declarations: [BoxesComponent,DiarycardDirective],
  imports: [
    CommonModule,
    BoxesRoutingModule
  ]
})
export class BoxesModule { }
