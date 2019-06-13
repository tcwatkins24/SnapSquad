import { Component, OnInit } from '@angular/core';
import { events } from '../data';

@Component({
  selector: 'event-deck',
  templateUrl: './event-deck.component.html',
  styleUrls: ['./event-deck.component.scss']
})
export class EventDeckComponent implements OnInit {
  events = events;

  changeDeck(deck: string) {
    if(deck === "Upcoming") {
      console.log("event-deck-component: sorted by upcoming");
      this.events.sort( (a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0; 
    }); };
    if(deck === "New") {
      console.log("event-deck-component: sorted by new");
    };
    if(deck === "Going") {
      console.log("event-deck-component: filtered by going");
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
