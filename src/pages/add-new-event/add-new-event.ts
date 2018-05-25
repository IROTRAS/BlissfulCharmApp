import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { AddItemsToEventPage } from '../add-items-to-event/add-items-to-event';
import { EventsProvider } from '../../providers/events/events';

/**
 */

@IonicPage()
@Component({
  selector: 'page-add-new-event',
  templateUrl: 'add-new-event.html',
})
export class AddNewEventPage {

  customerForm: FormGroup
  public loadtype: any;
  public event : any;
  private _HOST: string="http://192.168.0.20:8080/"
  public eventdate: any;
  public eventtype: any;
  public eventstatus: any;
  public firstname: any;
  public lastname: any;
  public email: any;
  public phone: any;
  public address: any;
  public notes: any;
  public paymentstatus: any;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private _HTTP: Http){

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
    /**
    * Save the Event information to the database
    */
    this._HTTP.post(this._HOST + "api/events", this.customerForm.value)
      .subscribe(
        (data: any) =>
        {
          console.log('Event Successfully Created');
          this.navCtrl.push(AddItemsToEventPage);
        },
        (error : any) =>
        {console.dir(error);}
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewEventPage');
  }



}
