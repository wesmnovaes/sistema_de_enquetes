import { EnqueteDetalhesComponent } from './enquete/enquete-detalhes/enquete-detalhes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EnqueteComponent } from './enquete/enquete.component';
import { ParciaisComponent } from './parciais/parciais.component';

const routes: Routes = [
  { path: '', component: EnqueteComponent},
  { path: 'enquete-detalhes', component: EnqueteDetalhesComponent},
  { path: 'parciais/:id', component: ParciaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
