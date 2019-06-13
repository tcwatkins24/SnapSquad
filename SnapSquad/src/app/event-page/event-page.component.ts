import { Component, OnInit, Input } from '@angular/core';
import {people} from '../data';
import {events} from '../data'

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss']
})
export class EventPageComponent implements OnInit {

  people = people;
  events = events;

  @Input() first: string;
  @Input() last: string;

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    this.first = "Jo";
    this.last = "Moley";
    people.push( {
      first: this.first,
      last: this.last
    });
  }

}
