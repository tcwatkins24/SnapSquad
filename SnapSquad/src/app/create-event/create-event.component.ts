import { Component, OnInit } from '@angular/core';
import {events} from '../data'
import {FormsModule} from '@angular/forms';

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
   reasonsToGo: string[];
   dateCreated: Date = new Date(Date.now());
   id: 2;

   

  constructor() { }

  addEvent() {
    this.id++;
    events.push( {
      name: this.name,
      date: this.date,
      summary: this.summary,
      pictureName: this.pictureName,
      reasonsToGo: this.reasonsToGo,
      dateCreated: this.dateCreated,
      id: this.id
    });
  }

  ngOnInit() {
  }

}
