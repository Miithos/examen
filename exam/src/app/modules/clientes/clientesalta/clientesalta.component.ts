import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientesalta',
  templateUrl: './clientesalta.component.html',
  styleUrls: ['./clientesalta.component.css']
})
export class ClientesaltaComponent implements OnInit {

  public title: string;

  constructor() { }

  ngOnInit(): void {

    this.title = 'Registro de Clientes';
  }

}
