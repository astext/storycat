import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Box1Component } from './box1.component';

const routes: Routes = [{ path: '', component: Box1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Box1RoutingModule { }
