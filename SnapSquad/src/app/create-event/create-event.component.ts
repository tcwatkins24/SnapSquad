import { Component, OnInit } from '@angular/core';
import {events} from '../data'
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

  placeholder = "It's really fun\nYou'd love it!\nI'm going!";

   name: string;
   date: Date;
   summary: string;
   pictureName: string;
   reason1ToGo: string;
   reason2ToGo: string;
   reason3ToGo: string;
   moreDetails: string;
   dateCreated: Date = new Date(Date.now());
   id: 2;

   

  constructor() { }

  addEvent() {
    var dateObject = new Date(this.date);
    this.id++;
    events.push( {
      name: this.name,
      date: dateObject,
      summary: this.summary,
      pictureName: this.pictureName,
      reason1Togo: this.reason1ToGo,
      reason2Togo: this.reason2ToGo,
      reason3Togo: this.reason3ToGo,
      moreDetails: this.moreDetails,
      dateCreated: this.dateCreated,
      id: this.id
    });
  }

  ngOnInit() {
  }

}
