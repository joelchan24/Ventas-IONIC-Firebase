import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisproductosPage } from './misproductos.page';

const routes: Routes = [
  {
    path: '',
    component: MisproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisproductosPageRoutingModule {}
