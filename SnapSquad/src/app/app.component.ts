import { Component } from '@angular/core';
import {CreateEventComponent} from './create-event/create-event.component'
import {EventFeedPageComponent} from './event-feed-page/event-feed-page.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SnapSquad';
}
