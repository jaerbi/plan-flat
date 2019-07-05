import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HouseComponent } from './house/house.component';
import { ControlersComponent } from './controlers/controlers.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    ControlersComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
