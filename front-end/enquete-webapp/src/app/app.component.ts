import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'enquete-webapp';

  lista_enquete: any[] = [];

constructor( private AppService$: AppService){}

ngOnInit(): void{
this.obterEnquetes();
}

obterEnquetes(){
  this.AppService$.obterEnquetes()
  .subscribe(dados => {
  this.lista_enquete.push(dados)
  })
}
}
