import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {EventFeedPageComponent} from './event-feed-page/event-feed-page.component'

const routes: Routes = [
  {path: "createEvent", component: CreateEventComponent},
  {path: "login", component: LoginPageComponent},
  {path: "eventFeedPage", component: EventFeedPageComponent},
  {path: "", component: LoginPageComponent},
  {path: "eventFeedPage/createEvent", component: CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
