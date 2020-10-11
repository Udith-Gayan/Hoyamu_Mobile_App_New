import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostItemMenuPageRoutingModule } from './post-item-menu-routing.module';

import { PostItemMenuPage } from './post-item-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostItemMenuPageRoutingModule
  ],
  declarations: [PostItemMenuPage]
})
export class PostItemMenuPageModule {}
