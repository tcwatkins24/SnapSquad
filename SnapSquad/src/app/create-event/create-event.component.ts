import { Component, OnInit } from '@angular/core';
import {events, eventsOriginal} from '../data'
import {FormsModule} from '@angular/forms';
import {counter} from '../data';

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
      pictureName: this.pictureName,
      reasonsToGo: this.reasonsToGo,
      dateCreated: this.dateCreated,
      id: newId.count,
      going: false
    });
    counter.push(newId);
  }

  ngOnInit() {
  }

}
