import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zdemo1Module } from './zdemo1/zdemo1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Zdemo1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
