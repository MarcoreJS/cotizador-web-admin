import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { ViewNewCarsComponent } from './view-new-cars/view-new-cars.component';
import { ClientsComponent } from './clients/clients.component';

const appRoutes: Routes = [
  { path: '', component: ViewNewCarsComponent },
  { path: 'add-car', component: NewCarsComponent },
  { path: 'clients', component: ClientsComponent }
];
export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);