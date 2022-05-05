import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Enquete } from './Enquete.classe';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  obterEnquetes(){
    return this.http.get<Enquete>(`${environment.apiUrl}/lista`)
  }

}
