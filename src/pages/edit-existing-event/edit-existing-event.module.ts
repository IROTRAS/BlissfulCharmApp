import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditExistingEventPage } from './edit-existing-event';

@NgModule({
  declarations: [
    EditExistingEventPage,
  ],
  imports: [
    IonicPageModule.forChild(EditExistingEventPage),
  ],
})
export class EditExistingEventPageModule {}
