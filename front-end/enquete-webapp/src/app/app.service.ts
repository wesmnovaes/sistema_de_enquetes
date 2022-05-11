import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpErrorResponse,  HttpHeaders } from '@angular/common/http'
import { Enquete } from './Enquete.classe';
import { Escolha } from './enquete/enquete-detalhes/escolha';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('Um erro ocorreu:', error.error)
    } else {
      console.error('backend retornou: ', error.error)
    }
    return throwError(() => new Error('Retorno do throw error'));
  }
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
  Voto(id: number, data: Escolha): Observable<any>{
    return this.http.post<Escolha>(`${environment.apiUrl}/votar/`+id, data) 
  }
  obterVoto(id: number){
    return this.http.get<Escolha>(`${environment.apiUrl}/get_votos/`+id) 
  }
}
