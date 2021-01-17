import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Andrés', apellido: 'Guzmán', email: 'profesor@bolsadeideas.com', createAt: '2018-01-01'},
    {id: 2, nombre: 'Mr. John', apellido: 'Doe', email: 'john.doe@gmail.com', createAt: '2018-01-02'},
    {id: 3, nombre: 'Linus', apellido: 'Torvalds', email: 'linus.torvalds@gmail.com', createAt: '2018-01-03'},
    {id: 4, nombre: 'Rasmus', apellido: 'Lerdorf', email: 'rasmus.lerdorf@gmail.com', createAt: '2018-01-04'},
    {id: 5, nombre: 'Erich', apellido: 'Gamma', email: 'erich.gamma@gmail.com', createAt: '2018-02-01'},
    {id: 6, nombre: 'Richard', apellido: 'Helm', email: 'richard.helm@gmail.com', createAt: '2018-02-10'},
    {id: 7, nombre: 'Ralph', apellido: 'Johnson', email: 'ralph.johnson@gmail.com', createAt: '2018-02-18'},
    {id: 8, nombre: 'John', apellido: 'Vlissides', email: 'john.vlissides@gmail.com', createAt: '2018-02-28'},
    {id: 9, nombre: 'Dr. James', apellido: 'Gosling', email: 'james.gosling@gmail.com', createAt: '2018-03-03'},
    {id: 10, nombre: 'Magma', apellido: 'Lee', email: 'magma.lee@gmail.com', createAt: '2018-03-04'},
    {id: 11, nombre: 'Tornado', apellido: 'Roe', email: 'tornado.roe@gmail.com', createAt: '2018-03-05'},
    {id: 12, nombre: 'Jade', apellido: 'Doe', email: 'jane.doe@gmail.com', createAt: '2018-03-06'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
