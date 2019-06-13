import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-navbar',
    templateUrl: './event-navbar.component.html',
    styleUrls: ['./event-navbar.component.scss']
})

export class EventNavbarComponent implements OnInit {

    @Output() changeDeck = new EventEmitter<string>();

    emitChangeDeck(deckName: string) {
        console.log("event-navbar-component: sent signal changeDeck with parameter " + deckName)
        this.changeDeck.emit(deckName);
    }

    constructor() { }
  
    ngOnInit() {
    }
  
}
  