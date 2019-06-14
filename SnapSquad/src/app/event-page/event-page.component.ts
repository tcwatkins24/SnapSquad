import { Component, OnInit, Input } from '@angular/core';
import { people } from '../data';
import { events } from '../data'
import { curEvent } from '../data';
import { eventsOriginal } from '../data';
import { peopleDis } from '../data';
@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  people = people;
  events = events;
  curEvent = curEvent;
  peopleDis = peopleDis;


  @Input() first: string;
  @Input() last: string;

  constructor() { }

  ngOnInit() {

  }

  addMember() {
    this.first = "Jo";
    this.last = "Moley";
    people[curEvent[0].id].push({
      first: this.first,
      last: this.last
    });

    for (let eve of eventsOriginal) {
      if (eve.id === curEvent[0].id) {
        eve.going = true;
      }
    }
  }

}
