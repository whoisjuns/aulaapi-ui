import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto de Aula';

  categorias = [
    {id: '1', nome: 'informática'},
    {id: '2', nome: 'biblioteca'},
    {id: '3', nome: 'boteco'},
    {id: '4', nome: 'lanchonete'}
  ]
}
