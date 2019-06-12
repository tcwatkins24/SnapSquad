import { Component, OnInit, Input } from '@angular/core';
import { eventNames } from 'cluster';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

    @Input() name: string;
    @Input() date: string;
    @Input() summary: string;
    @Input() pictureName: string;
    @Input() reasonsToGo: string[];

  constructor(name, date, summary, pictureName, reasonsToGo) { 
    this.name = name;
    this.date = date;
    this.summary = summary;
    this.pictureName = pictureName;
    this.reasonsToGo = reasonsToGo;
  }

  

  ngOnInit() {
  }

}
