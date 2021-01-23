import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxesComponent } from './boxes.component';

const routes: Routes = [{ path: '', component: BoxesComponent }, { path: 'box1', loadChildren: () => import('../box1/box1.module').then(m => m.Box1Module) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoxesRoutingModule { }
