import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parciais',
  templateUrl: './parciais.component.html',
  styleUrls: ['./parciais.component.css']
})
export class ParciaisComponent implements OnInit {

  constructor(private Appservico$: AppService, private route: ActivatedRoute, private local: Location) { }

  id: number = 0;
  lista: any

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    }
  );
    this.obterVotos(this.id)
  }

  obterVotos(id: number){
    this.Appservico$.obterVoto(this.id).subscribe(
      dados => {this.lista = dados}
    )
  }
  voltar(){
    this.local.back()
  }
}
