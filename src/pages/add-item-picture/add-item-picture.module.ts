import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemPicturePage } from './add-item-picture';

@NgModule({
  declarations: [
    AddItemPicturePage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemPicturePage),
  ],
})
export class AddItemPicturePageModule {}
