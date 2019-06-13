import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-feed-page',
  templateUrl: './event-feed-page.component.html',
  styleUrls: ['./event-feed-page.component.scss']
})
export class EventFeedPageComponent implements OnInit {

  @Input() deckState = "Upcoming";

  changeDeckStatus(deck: string) {
    console.log("event-feed-page-component: received signal changeDeck with parameter " + deck);
    this.deckState = deck;
  }

  constructor() { }

  ngOnInit() {
  }

}
