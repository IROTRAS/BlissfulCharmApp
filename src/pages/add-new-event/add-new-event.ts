import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddItemsToEventPage } from '../add-items-to-event/add-items-to-event';


/**
 */

@IonicPage()
@Component({
  selector: 'page-add-new-event',
  templateUrl: 'add-new-event.html',
})
export class AddNewEventPage {

  customerForm: FormGroup

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder){

    this.customerForm = this.formBuilder.group({
      eventdate: ['', Validators.required],
      eventtype: [''],
      eventstatus: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [''],
      phone: [''],
      address: [''],
      notes: [''],
      paymentstatus: ['']
      })
  }

  saveevent() {
    this.navCtrl.push(AddItemsToEventPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewEventPage');
  }



}
