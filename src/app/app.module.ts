import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { appRouting } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { ViewNewCarsComponent } from './view-new-cars/view-new-cars.component';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCarsComponent,
    MenuComponent,
    ViewNewCarsComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
