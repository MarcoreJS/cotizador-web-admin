import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { appRouting } from './app.routing';
import { MenuComponent } from './menu/menu.component';
import { ViewNewCarsComponent } from './view-new-cars/view-new-cars.component';
import { AngularFireDatabase } from '../../node_modules/angularfire2/database';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuth } from '../../node_modules/angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    NewCarsComponent,
    MenuComponent,
    ViewNewCarsComponent,
    ClientsComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
