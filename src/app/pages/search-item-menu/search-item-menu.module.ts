import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchItemMenuPageRoutingModule } from './search-item-menu-routing.module';

import { SearchItemMenuPage } from './search-item-menu.page';
import { SearchBarComponent } from 'src/app/common/components/search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchItemMenuPageRoutingModule
  ],
  declarations: [SearchItemMenuPage, SearchBarComponent]
})
export class SearchItemMenuPageModule {}
