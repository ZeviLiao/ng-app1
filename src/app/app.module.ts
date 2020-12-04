import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zdemo1Module } from './zdemo1/zdemo1.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../store/counter';
import { Comp2Component } from './comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Zdemo1Module,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
