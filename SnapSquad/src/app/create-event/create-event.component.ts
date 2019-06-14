import { Component, OnInit } from '@angular/core';
import {eventsOriginal} from '../data'
import {FormsModule} from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { SimpleWebDriverClient } from 'blocking-proxy/built/lib/simple_webdriver_client';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  eventsOriginal = eventsOriginal;

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
    eventsOriginal.push( {
      name: this.name,
      date: dateObject,
      summary: this.summary,
      pictureName: this.pictureName,
      reason1ToGo: this.reason1ToGo,
      reason2ToGo: this.reason2ToGo,
      reason3ToGo: this.reason3ToGo,
      dateCreated: this.dateCreated,
      id: this.id,
      going: false
    });
  }

  ngOnInit() {
  }

}
