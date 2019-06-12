import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventFeedPageComponent} from './event-feed-page/event-feed-page.component'
import {EventNavbarComponent} from './event-navbar/event-navbar.component'
import {EventDeckComponent} from './event-deck/event-deck.component';
import { EventCardComponent } from './event-card/event-card.component'
import { EventPageComponent } from './event-page/event-page.component';
import { EventComponent } from './event/event.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    LoginPageComponent,
    EventFeedPageComponent,
    EventNavbarComponent,
    EventDeckComponent,
    EventCardComponent,
    EventPageComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
