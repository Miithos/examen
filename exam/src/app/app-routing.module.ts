import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClientesComponent} from './modules/clientes/clientes.component';

// import {ClientesaltaComponent} from './modules/clientes/clientesalta/clientesalta.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent,
    // children: [
    // {
    //   path: '',
    //   component: ClientesaltaComponent,
    // },
  // ]
},

  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**',  redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
