import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Enquete } from './Enquete.classe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'enquete-webapp';

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
    console.log(this.lista_enquete )  
  }
  )
}
}
