import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamentos';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = { // FUNCIONA DO COMPONENT PRO TEMPLATE
    id : 1,
    conteudo: 'teste',
    autoria: 'matheus',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("novo pensamento") // FUNCIONA NA DIREÇÃO CONTRARIA -> DO TEMPLATE PRO COMPONENT
  }

}
