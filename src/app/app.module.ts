import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

////////////////////////////////////////////////////////////
import { routeComponent } from './route.component';
import { AppComponent } from './app.component';
import { FocusComponent } from './focus/focus.component';
import { ContaminantsComponent } from './contaminants/contaminants.component';

const route: Routes =[
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: AppComponent},
  {path: 'contaminants', component: ContaminantsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
   
    FocusComponent,
    ContaminantsComponent,
    routeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  exports:[ RouterModule ],
  providers: [],
  bootstrap: [routeComponent],
 
})
export class AppModule { }
