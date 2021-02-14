import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import {ClienteService } from './cliente.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {
  }

  ngOnInit(): void {
    this.clienteService.getClientes().pipe(
      tap(clientes => {
        this.clientes = clientes;
        console.log('ClientesComponent: tap 3');
        clientes.forEach(cliente => {
          console.log(cliente.nombre);
        });
      })
    ).subscribe();
  }

  public delete(cliente: Cliente): void {
    Swal.fire({
      title: 'Estás seguro',
      text: `Estás seguro de que deseas borrar el cliente: ${cliente.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, bórralo!',
      cancelButtonText: 'No, cancelar!'
    }).then(result => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(c => c !== cliente);
            Swal.fire(
              'Borrado!',
              `${cliente.nombre} has ha sido borrado con éxito!`,
              'success'
            );
          }
        );
      }
    });
  }
}
