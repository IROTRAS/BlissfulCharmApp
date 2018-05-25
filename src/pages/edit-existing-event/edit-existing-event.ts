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

  eventSearchForm: FormGroup

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder){

    this.eventSearchForm = this.formBuilder.group({
      eventdate: [''],
      firstname: [''],
      lastname: [''],
      })
  }

  eventsearch() {

    this.navCtrl.push(EventSearchResultsPage, {
      searchdata: {
        //eventdate: this.eventSearchForm.controls['eventdate'],
        firstname: this.eventSearchForm.controls['firstname'],
        lastname: this.eventSearchForm.controls['lastname']
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditExistingEventPage');
  }

}
