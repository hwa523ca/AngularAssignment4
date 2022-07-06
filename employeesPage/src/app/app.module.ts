import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterLink } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SortbyidPipe } from './pipes/sortbyid.pipe';
import { SortbynameaPipe } from './pipes/sortbynamea.pipe';
import { SortbynamezPipe } from './pipes/sortbynamez.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, routingComponents, SortbyidPipe, SortbynameaPipe, SortbynamezPipe],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
