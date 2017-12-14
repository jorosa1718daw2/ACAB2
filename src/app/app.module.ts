import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FocusComponent } from './focus/focus.component';
import { ContaminantsComponent } from './contaminants/contaminants.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusComponent,
    ContaminantsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
