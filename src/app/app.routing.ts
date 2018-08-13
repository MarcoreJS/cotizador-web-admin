import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { ViewNewCarsComponent } from './view-new-cars/view-new-cars.component';
import { ClientsComponent } from './clients/clients.component';
import { LoginComponent } from './login/login.component';
import { UsedCarsComponent } from './used-cars/used-cars.component';
import { AddUsedCarComponent } from './add-used-car/add-used-car.component';
import { CarViewComponent } from './car-view/car-view.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'cars', component: ViewNewCarsComponent },
  { path: 'add-car', component: NewCarsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'used-cars', component: UsedCarsComponent },
  { path: 'add-used-car', component: AddUsedCarComponent },
  { path: ':id/car', component: CarViewComponent },
  { path: 'login', component: LoginComponent },
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);