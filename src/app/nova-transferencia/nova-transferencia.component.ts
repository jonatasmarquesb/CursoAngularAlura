import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova trasnferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
