import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchItemMenuPage } from './search-item-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SearchItemMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchItemMenuPageRoutingModule {}
