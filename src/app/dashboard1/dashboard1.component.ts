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
  graphA: any;
  graphB: any;
  graphC: any;
  graphD: any;
  todosFiliados: number = 439;
  comAnuidadePaga: number = 118;
  comAnuidadePagaPercentage = ((this.comAnuidadePaga / this.todosFiliados * 100).toFixed(0));
  filiadosInadimplentes: number = 321;
  filiadosInadimplentesPercentage = ((this.filiadosInadimplentes / this.todosFiliados * 100).toFixed(0));
  dadosIncompletos: number = 348
  dadosIncompletosPercentage = ((this.dadosIncompletos / this.todosFiliados * 100).toFixed(0));

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
  }

  ngOnInit() {
    this.graphA = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: ['70%', '85%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: `{d}%`
          },
          labelLine: {
            show: false
          },
          data: [
            {value: this.todosFiliados, name: 'Filiados'},
            {value: 0, name: 'Total'}
          ],
          color: ['#40b0d0', '#E0E0E0']
        }
      ]
    };

    this.graphB = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: ['70%', '85%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: `${this.comAnuidadePagaPercentage}%`
          },
          labelLine: {
            show: false
          },
          data: [
            {value: this.comAnuidadePaga, name: 'Com anuidade paga'},
            {value: this.todosFiliados - this.comAnuidadePaga, name: 'Outros'}
          ],
          color: ['#ed6796', '#E0E0E0']
        }
      ]
    };

    this.graphC = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: ['70%', '85%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: `${this.filiadosInadimplentesPercentage}%`
          },
          labelLine: {
            show: false
          },
          data: [
            {value: this.filiadosInadimplentes, name: 'Inadimplentes'},
            {value: this.todosFiliados - this.filiadosInadimplentes, name: 'Outros'}
          ],
          color: ['#009689', '#E0E0E0']
        }
      ]
    };

    this.graphD = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: ['70%', '85%'],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'center',
            formatter: `${this.dadosIncompletosPercentage}%`
          },
          labelLine: {
            show: false
          },
          data: [
            {value: this.dadosIncompletos, name: 'Dados incompletos'},
            {value: this.todosFiliados - this.dadosIncompletos, name: 'Dados completos'}
          ],
          color: ['#99a5ab', '#E0E0E0']
        }
      ]
    };
  }
}
