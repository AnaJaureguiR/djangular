import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService.obtenerClientes().subscribe(data => {
      this.clientes = data;
    });
  }
}