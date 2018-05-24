import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello EventsProvider Provider');
    this.data=null;
  }

  getEvents(){

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('http://192.168.0.20:8080/api/events')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  createEvent(event){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://192.168.0.20:8080/api/events', JSON.stringify(event), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteEvent(id){

    this.http.delete('http://192.168.0.20:8080/api/events/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }

}
