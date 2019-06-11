import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component'
import {LoginPageComponent} from './login-page/login-page.component'

const routes: Routes = [
  {path: "createEvent", component: CreateEventComponent},
  {path: "login", component: LoginPageComponent},
  {path: "", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
