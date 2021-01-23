import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Box1RoutingModule } from './box1-routing.module';
import { Box1Component } from './box1.component';


@NgModule({
  declarations: [
    Box1Component
  ],
  imports: [
    CommonModule,
    Box1RoutingModule
  ]
})
export class Box1Module { }
