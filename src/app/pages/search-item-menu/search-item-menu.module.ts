import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchItemMenuPageRoutingModule } from './search-item-menu-routing.module';

import { SearchItemMenuPage } from './search-item-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchItemMenuPageRoutingModule
  ],
  declarations: [SearchItemMenuPage]
})
export class SearchItemMenuPageModule {}
