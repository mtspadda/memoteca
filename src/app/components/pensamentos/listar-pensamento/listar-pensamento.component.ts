import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {



  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Padda',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade',
      autoria: 'Padda',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Minha propriedade',
      autoria: 'Padda',
      modelo: 'modelo1'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
