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
import { FocusComponent } from './focus/focus.component';
import { ContaminantsComponent } from './contaminants/contaminants.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { RouteComponent } from './route/route.component';

const route: Routes =[
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app', component: AppComponent},
  {path: 'users', component: UsersComponent},
  {path: 'contaminants', component: ContaminantsComponent},
  {path: 'focus', component: FocusComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
   
    FocusComponent,
    ContaminantsComponent,
    UsersComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route),
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports:[ 
    RouterModule,
    MatTabsModule
   ],
  providers: [],
  bootstrap: [RouteComponent],
 
})
export class AppModule { }
