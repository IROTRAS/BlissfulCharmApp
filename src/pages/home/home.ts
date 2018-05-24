import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddNewEventPage } from '../add-new-event/add-new-event';
import { EditExistingEventPage } from '../edit-existing-event/edit-existing-event';
import { ViewItemsPage } from '../view-items/view-items';
import { AddItemPicturePage } from '../add-item-picture/add-item-picture';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController){
  }
  onLoadAddNewEvent() {
    this.navCtrl.push(AddNewEventPage);
  }
  onLoadEditExistingEvent() {
    this.navCtrl.push(EditExistingEventPage);
  }
  onLoadViewItems() {
    this.navCtrl.push(ViewItemsPage);
  }
  onLoadAddItemPicture() {
    this.navCtrl.push(AddItemPicturePage);
  }
}
