import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DieComponent }   from './die.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent, 
  	DieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
