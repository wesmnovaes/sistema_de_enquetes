import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Enquete } from './Enquete.classe';
import { Escolha } from './enquete/enquete-detalhes/escolha';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  obterEnquetes(){
    return this.http.get<Enquete>(`${environment.apiUrl}/lista_questoes/`)
  }
  obterOpcoes(id: number){
    return this.http.get<Escolha>(`${environment.apiUrl}/choices_byid/`+id) 
  }
  obterQuestao_byID(id: number){
    return this.http.get<Enquete>(`${environment.apiUrl}/questao_byid/`+id) 
  }
}
