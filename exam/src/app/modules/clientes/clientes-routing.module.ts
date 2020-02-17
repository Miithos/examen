import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientesaltaComponent} from './clientesalta/clientesalta.component';


const routes: Routes = [
  {
    path: 'crea',
    component: ClientesaltaComponent,
  },
];

export const ClientesRoutingModule = RouterModule.forChild(routes);
