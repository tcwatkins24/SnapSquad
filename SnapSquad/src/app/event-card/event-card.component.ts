import { Component, OnInit, Output, Input } from '@angular/core';

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

  constructor() { 
  }

  ngOnInit() {
  }

}
