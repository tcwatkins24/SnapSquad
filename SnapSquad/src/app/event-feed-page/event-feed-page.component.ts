import { Component, OnInit, Input } from '@angular/core';
import { events } from "../data";

@Component({
  selector: 'app-event-feed-page',
  templateUrl: './event-feed-page.component.html',
  styleUrls: ['./event-feed-page.component.scss']
})
export class EventFeedPageComponent implements OnInit {
  events = events;

  changeDeck(deck: string) {
    console.log("event-feed-page-component: received signal changeDeck with parameter " + deck);
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
