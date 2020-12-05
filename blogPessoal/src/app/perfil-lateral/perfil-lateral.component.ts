import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {


  nome: string; //variavel criada para fazer a interpolação

  constructor() { }

  ngOnInit(){
    this.nome = 'Willian Smith' //definindo um valor para a variavel criada acima 
  }

}
