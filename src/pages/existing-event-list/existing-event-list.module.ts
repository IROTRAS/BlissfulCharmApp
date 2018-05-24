import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExistingEventListPage } from './existing-event-list';

@NgModule({
  declarations: [
    ExistingEventListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExistingEventListPage),
  ],
})
export class ExistingEventListPageModule {}
