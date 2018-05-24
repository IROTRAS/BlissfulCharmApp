import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventSearchResultsPage } from './event-search-results';

@NgModule({
  declarations: [
    EventSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventSearchResultsPage),
  ],
})
export class EventSearchResultsPageModule {}
