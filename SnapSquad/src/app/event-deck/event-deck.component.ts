import { Component, OnInit } from '@angular/core';
import { events } from '../data';

@Component({
  selector: 'event-deck',
  templateUrl: './event-deck.component.html',
  styleUrls: ['./event-deck.component.scss']
})
export class EventDeckComponent implements OnInit {
  events = events;

  constructor() { }

  ngOnInit() {
  }

}
