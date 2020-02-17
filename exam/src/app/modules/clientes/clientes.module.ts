import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from './clientes.component';

import { ClientesService } from './services/clientes.service';
import { ClientesaltaComponent } from './clientesalta/clientesalta.component';
import { ClientesRoutingModule } from './clientes-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientesComponent,ClientesaltaComponent],
  imports: [
    CommonModule,
    ClientesService,
    FormsModule, 
    ClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
