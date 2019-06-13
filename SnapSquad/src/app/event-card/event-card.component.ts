import { Component, OnInit, Output, Input } from '@angular/core';
import { curEvent } from '../data';
import {events} from '../data'

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  @Input() name: string;
  @Input() date: Date;
  @Input() summary: string;
  @Input() pictureName: string;
  @Input() reasonsToGo: string[];
  @Input() dateCreated: Date;
  @Input() id: number;

  constructor() { 
  }

    setcurEvent(id: number) {
      console.log(curEvent);
      var temp = curEvent.pop();
      var newCurrentEvent;
      for(let eve of events) {
        if (eve.id === id) {newCurrentEvent = eve;}
      }
      curEvent.push(newCurrentEvent);
      console.log(curEvent);
    }
  ngOnInit() {
  }

}
