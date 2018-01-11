import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';

////////////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouteComponent } from './route/route.component';
import { FocusContaminantComponent } from './focus-contaminant/focus-contaminant.component';
import { Focus_Component } from './focus_/focus_.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './dialog-overview-exemple/dialog-overview-example'

////MATERIAL////
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

////////
import { FlexLayoutModule } from '@angular/flex-layout';
import { MomentModule } from 'angular2-moment/moment.module';


const route: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'app', component: AppComponent },
  { path: 'focus_', component: Focus_Component },

];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    Focus_Component,
    LoginComponent,
    NavbarComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog
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
    FlexLayoutModule,
    MomentModule,
    ReactiveFormsModule,
    CdkTableModule,
    
////////////////////////
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  exports: [
    RouterModule,
    MatTabsModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MomentModule
    
  ],
  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  providers: [],
  bootstrap: [RouteComponent],

})
export class AppModule { }
