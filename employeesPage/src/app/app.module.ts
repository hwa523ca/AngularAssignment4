import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
