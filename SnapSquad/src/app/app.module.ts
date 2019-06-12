import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EventFeedPageComponent} from './event-feed-page/event-feed-page.component'
import {EventNavbarComponent} from './event-navbar/event-navbar.component'
import {EventDeckComponent} from './event-deck/event-deck.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    LoginPageComponent,
    EventFeedPageComponent,
    EventNavbarComponent,
    EventDeckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
