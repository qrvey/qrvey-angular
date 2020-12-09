import { BrowserModule } from '@angular/platform-browser';
//Step 1. Important to add CUSTOM_ELEMENTS_SCHEMA
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //Step 1. CUSTOM_ELEMENTS_SCHEMA added to schemas
})
export class AppModule { }
