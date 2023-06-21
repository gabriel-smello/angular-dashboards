import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  styles: [`
    :host ::ng-deep .p-dropdown-label {
      transform: translateY(-30%);
    }
  `]
})
export class Dashboard2Component implements OnInit {
  users: any[] = [];
  formasPagamento: any[] = [];
  situacaoReserva: any[] = [];

  constructor() {
    this.users = [
      {id: 1, dataUso: '11/06/202', nChave: 'F55C0DF2', item: 'Churrasqueira Nº 02', associado: 'AILTON JOSÉ MARTINS SANTANA', formaPagamento: 'A Vista', situacao: 'Confirmada', valor: '140,00'},
      {id: 2, dataUso: '15/06/202', nChave: 'G79A3HJ1', item: 'Piscina Familiar', associado: 'MARCIA SILVA', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '250,00'},
      {id: 3, dataUso: '20/06/202', nChave: 'K2D5V8F7', item: 'Salão de Festas', associado: 'CARLOS ALBERTO MENDONÇA', formaPagamento: 'A Vista', situacao: 'Confirmada', valor: '400,00'},
      {id: 4, dataUso: '25/06/202', nChave: 'E0B5G2C6', item: 'Campo de Futebol', associado: 'FERNANDO OLIVEIRA', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '150,00'},
      {id: 5, dataUso: '01/07/202', nChave: 'I6J3L9K2', item: 'Churrasqueira Nº 05', associado: 'LUCIANA RODRIGUES', formaPagamento: 'A Vista', situacao: 'Cancelada', valor: '120,00'},
      {id: 6, dataUso: '07/07/202', nChave: 'M4N7B1V8', item: 'Piscina Infantil', associado: 'ROBERTO SANTOS', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '180,00'},
      {id: 7, dataUso: '12/07/202', nChave: 'P3O6R9T2', item: 'Quadra de Tênis', associado: 'FABIANA OLIVEIRA', formaPagamento: 'A Vista', situacao: 'Confirmada', valor: '200,00'},
      {id: 8, dataUso: '17/07/202', nChave: 'S9T2Z5X8', item: 'Salão de Jogos', associado: 'RAFAEL MARTINS', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '100,00'},
      {id: 9, dataUso: '22/07/202', nChave: 'V8X5Z2T9', item: 'Churrasqueira Nº 03', associado: 'ANDRÉIA SANTOS', formaPagamento: 'A Vista', situacao: 'Confirmada', valor: '150,00'},
      {id: 10, dataUso: '27/07/202', nChave: 'Y1W4U7I3', item: 'Piscina Semiolímpica', associado: 'FERNANDO RIBEIRO', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '300,00'},
      {id: 11, dataUso: '02/08/202', nChave: 'B8E5D2C6', item: 'Sauna', associado: 'PATRÍCIA SILVA', formaPagamento: 'A Vista', situacao: 'Confirmada', valor: '80,00'},
      {id: 12, dataUso: '07/08/202', nChave: 'F7G2H1J3', item: 'Churrasqueira Nº 01', associado: 'RODRIGO MARTINS', formaPagamento: 'A Prazo', situacao: 'Pendente', valor: '130,00'}
    ];

    this.formasPagamento = [
      {id: 1, name: 'A Vista'},
      {id: 2, name: 'Cortesia'},
      {id: 3, name: 'Débito em conta'},
      {id: 4, name: 'Pix'},
    ];

    this.situacaoReserva = [
      {id: 1, name: 'Reservas Confirmadas'},
      {id: 2, name: 'Reservas Pendentes'}
    ];
  }

  ngOnInit() {
  }
}
