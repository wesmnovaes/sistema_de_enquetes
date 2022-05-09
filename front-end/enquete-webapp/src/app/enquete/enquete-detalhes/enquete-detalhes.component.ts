import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enquete-detalhes',
  templateUrl: './enquete-detalhes.component.html',
  styleUrls: ['./enquete-detalhes.component.css']
})
export class EnqueteDetalhesComponent implements OnInit {

  private enquete: number = 0;
  escolhas: any;
  titulo_enquete: string = '';

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
    }
    )
  }

}
