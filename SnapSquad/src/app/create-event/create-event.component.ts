import { Component, OnInit } from '@angular/core';
import {events, eventsOriginal} from '../data'
import {counter} from '../data';
import {FormsModule} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { SimpleWebDriverClient } from 'blocking-proxy/built/lib/simple_webdriver_client';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  events = events;
  

   name: string;
   date: Date;
   summary: string;
   pictureName: string;
   reason1ToGo: string;
   reason2ToGo: string;
   reason3ToGo: string;
   moreDetails: string;
   dateCreated: Date = new Date(Date.now());
   id: number;

   

  constructor() { }

  addEvent() {
    var dateObject = new Date(this.date);
    var newId = counter.pop();
    newId.count += 1;
    console.log(this.id);
    eventsOriginal.push( {
      name: this.name,
      date: dateObject,
      summary: this.summary,
      pictureName: "assets/" + this.pictureName,
      reason1ToGo: this.reason1ToGo,
      reason2ToGo: this.reason2ToGo,
      reason3ToGo: this.reason3ToGo,
      dateCreated: this.dateCreated,
      id: newId.count,
      going: false
      
    });
    counter.push(newId);
    console.log("pushed new event");
  }

  ngOnInit() {
  }

}
