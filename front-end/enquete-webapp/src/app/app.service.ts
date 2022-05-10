import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http'
import { Enquete } from './Enquete.classe';
import { Escolha } from './enquete/enquete-detalhes/escolha';
import { catchError, map, tap } from 'rxjs/operators';

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
  deleteQuestao(id: number){
    return this.http.delete(`${environment.apiUrl}/questao_byid/`+id)
  }
  enviarVoto(id: number, data: Escolha){
    return this.http.post<Escolha>(`${environment.apiUrl}/votar/`+id, data) 
  }
}
