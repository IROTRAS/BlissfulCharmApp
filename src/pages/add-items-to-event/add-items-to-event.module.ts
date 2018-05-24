import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddItemsToEventPage } from './add-items-to-event';

@NgModule({
  declarations: [
    AddItemsToEventPage,
  ],
  imports: [
    IonicPageModule.forChild(AddItemsToEventPage),
  ],
})
export class AddItemsToEventPageModule {}
