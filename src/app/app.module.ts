import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
////////////////////////////////////////////////////////////
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
////////////////////////////////////////////////////////////

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouteComponent } from './route/route.component';
import { FocusContaminantComponent } from './focus-contaminant/focus-contaminant.component';
import { Focus_Component } from './focus_/focus_.component';
import {
  MatCardModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment/moment.module';

const route: Routes =[
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app', component: AppComponent},
  {path: 'focus_', component: Focus_Component},
  
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    Focus_Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NoopAnimationsModule,

    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MomentModule
  ],
  exports:[ 
    RouterModule,
    MatTabsModule,

    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MomentModule
   ],
  providers: [],
  bootstrap: [RouteComponent],
 
})
export class AppModule { }
