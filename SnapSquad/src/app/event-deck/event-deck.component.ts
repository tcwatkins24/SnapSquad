import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'event-deck',
  templateUrl: './event-deck.component.html',
  styleUrls: ['./event-deck.component.scss']
})
export class EventDeckComponent implements OnInit {
  @Input() events

  constructor() { }

  ngOnInit() {
  }

}
