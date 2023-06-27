import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
  styles: [`
    :host ::ng-deep .p-dropdown-label {
      transform: translateY(-20%);
    }

    :host ::ng-deep .p-calendar .p-button,
    :host ::ng-deep .p-calendar .p-button:hover {
      background-color: var(--blue-800);
      border-color: var(--blue-800);
    }

    :host ::ng-deep .p-highlight.p-togglebutton,
    :host ::ng-deep .p-highlight.p-togglebutton:hover {
      background: var(--blue-800);
      border: none;
      color: white;
    }
  `]
})
export class CadastroComponent {
  form: FormGroup;
  academias: any[] = [];
  generos: any[] = [];
  estadosCivis: any[] = [];
  profissoes: any[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      proprietario: new FormControl(null),
      nRegistroAutomatico: new FormControl({value: '00446', disabled: true}),
      nRegistroAnterior: new FormControl(null, [Validators.required]),
      academia: new FormControl(null, [Validators.required]),
      nome: new FormControl(null, [Validators.required]),
      sobrenome: new FormControl(null, [Validators.required]),
      apelido: new FormControl(null, [Validators.required]),
      rg: new FormControl(null),
      orgaoExpeditor: new FormControl(null),
      cpf: new FormControl(null),
      nascimento: new FormControl(null),
      genero: new FormControl(null),
      estadoCivil: new FormControl(null),
      profissao: new FormControl(null),
      inicioPratica: new FormControl(null),
      graduacao: new FormControl(null),
      dtGraduacao: new FormControl(null),
      telefone: new FormControl(null),
      email: new FormControl(null),
      anotacoes: new FormControl(null),
    });

    this.academias = [
      {id: 1, nome: 'Academia A'},
      {id: 2, nome: 'Academia B'},
      {id: 3, nome: 'Academia C'},
      {id: 4, nome: 'Academia D'},
    ];

    this.generos = [
      {id: 1, nome: 'Masculino'},
      {id: 2, nome: 'Feminino'},
      {id: 3, nome: 'Outro'},
    ];

    this.estadosCivis = [
      {id: 1, nome: 'Solteiro'},
      {id: 2, nome: 'Casado'},
      {id: 3, nome: 'Diforciado'},
      {id: 4, nome: 'Viúvo'},
    ];

    this.profissoes = [
      {id: 1, nome: 'Atendente'},
      {id: 2, nome: 'Professor'},
      {id: 3, nome: 'Aluno'},
      {id: 4, nome: 'Secretário'},
    ];

  }
}
