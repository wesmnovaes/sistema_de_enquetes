import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnqueteComponent } from './enquete/enquete.component';
import { EnqueteDetalhesComponent } from './enquete/enquete-detalhes/enquete-detalhes.component';
import { FormsModule } from '@angular/forms';
import { ParciaisComponent } from './parciais/parciais.component';


@NgModule({
  declarations: [
    AppComponent,
    EnqueteComponent,
    EnqueteDetalhesComponent,
    ParciaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
