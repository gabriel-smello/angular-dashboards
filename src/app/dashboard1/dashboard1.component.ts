import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
  styles: [`
    :host ::ng-deep .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
      background: rgba(41, 91, 172, 0.06);
    }
  `]
})
export class Dashboard1Component implements OnInit {
  users: any[] = [];
  data: any[] = [];
  options: any[] = [];
  graphA: any;

  constructor() {
    this.users = [
      {
        id: 1,
        nome: 'ábia Luyana Oliveira de Andrade Medeiros',
        registro: '00074',
        dtNascimento: '06/05/1986',
        telefone: '(61) 99203-4542',
        email: 'abia@gmail.com',
        anotacao: 'Anotações aqui'
      },
      {
        id: 2,
        nome: 'Carlos Henrique Silva',
        registro: '00082',
        dtNascimento: '12/09/1990',
        telefone: '(61) 98765-4321',
        email: 'carlos.silva@gmail.com',
        anotacao: 'Nenhuma anotação'
      },
      {
        id: 3,
        nome: 'Fernanda Costa Santos',
        registro: '00120',
        dtNascimento: '18/07/1992',
        telefone: '(61) 99876-5432',
        email: 'fernanda.costa@gmail.com',
        anotacao: 'Detalhes importantes'
      },
      {
        id: 4,
        nome: 'Ricardo Oliveira Souza',
        registro: '00150',
        dtNascimento: '03/11/1985',
        telefone: '(61) 98765-1234',
        email: 'ricardo.souza@gmail.com',
        anotacao: 'Ligar depois das 15h'
      },
      {
        id: 5,
        nome: 'Ana Luiza Mendes Castro',
        registro: '00205',
        dtNascimento: '29/06/1994',
        telefone: '(61) 99999-9999',
        email: 'ana.castro@gmail.com',
        anotacao: 'Informações confidenciais'
      },
      {
        id: 6,
        nome: 'João Pedro Fernandes Lima',
        registro: '00234',
        dtNascimento: '10/02/1991',
        telefone: '(61) 98888-8888',
        email: 'joao.lima@gmail.com',
        anotacao: 'Anotações importantes'
      },
      {
        id: 7,
        nome: 'Juliana Santos Pereira',
        registro: '00301',
        dtNascimento: '15/04/1988',
        telefone: '(61) 99999-1234',
        email: 'juliana.pereira@gmail.com',
        anotacao: 'Lembrar de enviar documentos'
      },
      {
        id: 8,
        nome: 'Rodrigo Almeida Costa',
        registro: '00321',
        dtNascimento: '20/09/1993',
        telefone: '(61) 99777-7777',
        email: 'rodrigo.costa@gmail.com',
        anotacao: 'Agendar reunião'
      },
      {
        id: 9,
        nome: 'Mariana Oliveira Carvalho',
        registro: '00402',
        dtNascimento: '05/12/1990',
        telefone: '(61) 99666-6666',
        email: 'mariana.carvalho@gmail.com',
        anotacao: 'Anotações gerais'
      },
      {
        id: 10,
        nome: 'Gustavo Santos Silva',
        registro: '00451',
        dtNascimento: '25/08/1987',
        telefone: '(61) 99444-4444',
        email: 'gustavo.silva@gmail.com',
        anotacao: 'Revisar contrato'
      },
      {
        id: 11,
        nome: 'Laura Oliveira Costa',
        registro: '00500',
        dtNascimento: '02/03/1995',
        telefone: '(61) 99333-3333',
        email: 'laura.costa@gmail.com',
        anotacao: 'Anotações pessoais'
      },
      {
        id: 12,
        nome: 'Pedro Henrique Medeiros',
        registro: '00512',
        dtNascimento: '14/11/1998',
        telefone: '(61) 99222-2222',
        email: 'pedro.medeiros@gmail.com',
        anotacao: 'Urgente'
      }
    ];

    this.data = [10, 20, 30];

    this.options = ['A', 'B', 'C'];
  }

  ngOnInit() {

    this.graphA = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
          ]
        }
      ]
    };
  }
}
