import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Escolha } from './escolha';

@Component({
  selector: 'app-enquete-detalhes',
  templateUrl: './enquete-detalhes.component.html',
  styleUrls: ['./enquete-detalhes.component.css']
})
export class EnqueteDetalhesComponent implements OnInit {

  enquete: number = 0;
  escolhas: any;
  titulo_enquete: string = '';
  votoform = new FormGroup({});

data_form: string = ''
id_form: number = 0
  
constructor(private route: ActivatedRoute, private AppService$: AppService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.enquete = params.enquete;
      }
    );
    this.obterOpcoes(this.enquete)
    this.obterTitulo()
  }

  obterTitulo(){
    this.AppService$.obterQuestao_byID(this.enquete)
    .subscribe(dados => {
      this.titulo_enquete = dados.question_text
    })
  }

  obterOpcoes(id: number){
    this.AppService$.obterOpcoes(id)
    .subscribe( dados => {
      this.escolhas = dados
    })
  }

  id: number = 0;
  question: number = 0;
  choice: string = '';
  votes: number = 0;

  Votar(f: NgForm): void{
    let e: Escolha = {'id':f.value['choice'],'question':this.enquete, 'choice': '', 'votes':0}
    this.AppService$.enviarVoto(this.enquete,e).subscribe()
    console.log(e)
    }

}
