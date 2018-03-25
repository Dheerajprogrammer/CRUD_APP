import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TodoService } from "./to-do/to-do.service";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';


const appRoutes: Routes= [
  {path: 'Home', component: ToDoComponent, data: { title: 'Home' }},
  {path: 'Users', component: UsersComponent, data: { title: 'Users List' }},
  {path: '', component: ToDoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes) //, {enableTracing: true}
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
