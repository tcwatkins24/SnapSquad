import { Component, OnInit, Input, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() name: string;
  @Input() date: string;
  @Input() summary: string;
  @Input() pictureName: string;
  @Input() reasonsToGo: string[];

  constructor() { 
  }

  ngOnInit() {
  }

}
