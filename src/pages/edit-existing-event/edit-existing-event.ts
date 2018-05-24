import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventSearchResultsPage } from '../event-search-results/event-search-results'
/**

 */

@IonicPage()
@Component({
  selector: 'page-edit-existing-event',
  templateUrl: 'edit-existing-event.html',
})
export class EditExistingEventPage {

  customerSearchForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder){

    this.customerSearchForm = this.formBuilder.group({
      eventdate: ['', Validators.required],
      firstname: [''],
      lastname: [''],
      })
  }

  customersearch() {
    this.navCtrl.push(EventSearchResultsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditExistingEventPage');
  }

}
