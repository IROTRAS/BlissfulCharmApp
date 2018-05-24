import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { EventsProvider } from '../../providers/events/events';

/**
 * Generated class for the EventSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-search-results',
  templateUrl: 'event-search-results.html',
})
export class EventSearchResultsPage {

  public events : any;
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _MODAL: ModalController,
              private _TOAST: ToastController,
              private _HTTP: Http,
              public eventsService: EventsProvider){
    this.eventdate= this.navParams.get('eventdate');
    this.eventtype= this.navParams.get('eventtype');
    this.eventstatus= this.navParams.get('eventstatus');
    this.firstname= this.navParams.get('firstname');
    this.lastname= this.navParams.get('lastname');
    this.email= this.navParams.get('email');
    this.phone= this.navParams.get('phone');
    this.address= this.navParams.get('address');
    this.notes= this.navParams.get('notes');
    this.paymentstatus= this.navParams.get('paymentstatus');

  }
  /**
  * Retrieve the documents from the MongoDB database based on EditExistingEventPage
  * on the ionViewDidEnter lifecycle event
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventSearchResultsPage');
    this.retrieve();
  }

  /**
  * Delete a selected document from the MongoDB database

  */
  deleteRecord(event : any) : void
  {
    // Retrieve the document ID from the supplied parameter and
    // define the URL which triggers the node route for deleting the document
    let recordID 		: string		= event._id,
        url       	: any      	 	= this._HOST + "api/events/" + recordID;

    // Use Angular's Http module's delete method
    this._HTTP
    .delete(url)
    .subscribe((data : any) =>
    {
        // If the request was successful notify the user
        this.retrieve();
        this.displayNotification(data.records.name + ' was successfully deleted');
    },
    (error : any) =>
    {
        console.dir(error);
    });
  }

  /**
  * Retrieve documents from the MongoDB database
  */
  retrieve() {
    //var data=[];
    this._HTTP
      .get(this._HOST + "api/events")
      .subscribe(
        (data: any) =>
        {
          this.events = JSON.parse(data._body);
        },
        (error : any) =>
        {console.dir(error);}
      );
  }



  /**
  * Send the record (for the selected document from the MongoDB
  * database) to the manage-gallery page to be edited in the
  * template form fields
  */
  updateRecord(item : any) : void
  {
    this.navCtrl.push('manage-gallery', { record : item });
  }



  /**
  * Add a new record courtesy of the template form fields on
  * the manage-gallery page
  */
  addRecord() : void
  {
    this.navCtrl.push('manage-gallery');
  }




  /**
  * View the selected record in a modal window

  */
  viewRecord(item : any): void
  {
    let modal = this._MODAL.create('view-gallery', { record : item });
    modal.present();
  }



  /**
  * Displays a message to the user
  */
  displayNotification(message : string) : void
  {
    let toast = this._TOAST.create({
        message 	: message,
        duration 	: 3000
    });
    toast.present();
  }

}
