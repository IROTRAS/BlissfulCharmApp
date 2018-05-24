import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
//import { Camera } from '@ionic-native/camera';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddNewEventPage } from '../pages/add-new-event/add-new-event';
import { AddItemPicturePage } from '../pages/add-item-picture/add-item-picture';
import { EditExistingEventPage } from '../pages/edit-existing-event/edit-existing-event';
import { ViewItemsPage } from '../pages/view-items/view-items';
import { AddItemsToEventPage } from '../pages/add-items-to-event/add-items-to-event';
import { EventSearchResultsPage } from '../pages/event-search-results/event-search-results'

import { EventsProvider } from '../providers/events/events';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddNewEventPage,
    AddItemPicturePage,
    EditExistingEventPage,
    ViewItemsPage,
    AddItemsToEventPage,
    EventSearchResultsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddNewEventPage,
    AddItemPicturePage,
    EditExistingEventPage,
    ViewItemsPage,
    AddItemsToEventPage,
    EventSearchResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //Camera,
    EventsProvider
  ]
})
export class AppModule {}
