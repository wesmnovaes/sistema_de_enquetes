import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {

lista_enquete: any;



constructor( private AppService$: AppService){}

ngOnInit(): void{
this.obterEnquetes();
}

obterEnquetes(){
  this.AppService$.obterEnquetes()
  .subscribe(
    dados => {
    this.lista_enquete = dados
  })
}

deleteQuestao(id: number){
      if(this.AppService$.deleteQuestao(id).subscribe())
      window.alert('Enquete exluída com sucesso!')
      this.obterEnquetes();
  }  
}
