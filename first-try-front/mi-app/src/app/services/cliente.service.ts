import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiURL = 'http://127.0.0.1:8000/api/clientes/';

  constructor(private http: HttpClient) { }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  agregarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiURL, cliente);
  }

  eliminarCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}${id}/`);
  }
}