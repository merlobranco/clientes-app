import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  titulo = 'Crear Cliente';
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        Swal.fire('New customer', `Customer ${cliente.nombre} create successfully!`, 'success');
      });
  }

}
