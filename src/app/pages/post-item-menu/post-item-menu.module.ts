import { BagComponent } from './../post-items/bag/bag.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostItemMenuPageRoutingModule } from './post-item-menu-routing.module';

import { PostItemMenuPage } from './post-item-menu.page';
import { SearchBarComponent } from 'src/app/common/components/search-bar/search-bar.component';
import { DatePickerComponent } from 'src/app/common/components/date-picker/date-picker.component';
import { ImgUploaderComponent } from 'src/app/common/components/img-uploader/img-uploader.component';

@NgModule({
  entryComponents: [DatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostItemMenuPageRoutingModule
  ],
  declarations: [PostItemMenuPage, SearchBarComponent, BagComponent, DatePickerComponent, ImgUploaderComponent]
})
export class PostItemMenuPageModule {}
