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
   date: string;
   summary: string;
   pictureName: string;
   reasonsToGo: string[];


  constructor() { }

  addEvent() {
    events.push( {
      name: this.name,
      date: this.date,
      summary: this.summary,
      pictureName: this.pictureName,
      reasonsToGo: this.reasonsToGo
    });
  }

  ngOnInit() {
  }

}
