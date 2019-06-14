import { Component, OnInit, Input } from '@angular/core';
import { events } from "../data";
import {eventsOriginal} from '../data';

@Component({
  selector: 'app-event-feed-page',
  templateUrl: './event-feed-page.component.html',
  styleUrls: ['./event-feed-page.component.scss']
})
export class EventFeedPageComponent implements OnInit {
  events = eventsOriginal;

  changeDeck(deck: string) {
    console.log("event-feed-page-component: received signal changeDeck with parameter " + deck);
    if(deck === "Upcoming") {
      this.events = eventsOriginal;
      console.log("event-deck-component: sorted by upcoming");
      this.events.sort( (a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0; 
    }); };
    if(deck === "New") {
      this.events = eventsOriginal;
      console.log("event-deck-component: sorted by new");
      this.events.sort( (a, b) => {
        if (a.dateCreated < b.dateCreated) return -1;
        if (a.dateCreated > b.dateCreated) return 1;
        return 0; 
    }); };
    if(deck === "Going") {
      this.events = eventsOriginal;
      this.events = this.events.filter(function(el) {
        return el.going === true;
      });
      console.log("event-deck-component: filtered by going");
    };

    
  }

  constructor() {
    this.changeDeck("Upcoming");
   }

  ngOnInit() {
  }

}
