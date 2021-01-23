import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorycatComponent } from './storycat.component';

import { StorycatDirective } from '../directives/storycat/storycat.directive' ;



@NgModule({
  declarations: [
    StorycatComponent,
    StorycatDirective
  ],
  imports: [
    CommonModule,
    StorycatModule
  ]
})
export class StorycatModule { }
