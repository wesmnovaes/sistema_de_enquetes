import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-enquete',
  templateUrl: './enquete.component.html',
  styleUrls: ['./enquete.component.css']
})
export class EnqueteComponent implements OnInit {

  
lista_enquete: any;
arr_list: any[] = [];

constructor( private AppService$: AppService){}

ngOnInit(): void{
this.obterEnquetes();
}

obterEnquetes(){

  this.AppService$.obterEnquetes()
  .subscribe(
    dados => {
    this.lista_enquete = dados
    //console.log(this.lista_enquete )  
  }
  )
}
}
