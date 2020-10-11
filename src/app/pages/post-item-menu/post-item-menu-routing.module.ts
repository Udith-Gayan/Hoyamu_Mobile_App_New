import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostItemMenuPage } from './post-item-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PostItemMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostItemMenuPageRoutingModule {}
