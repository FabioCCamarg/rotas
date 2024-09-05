import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GeralComponent } from './components/geral/geral.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BasicaComponent } from './components/basica/basica.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { CreditoComponent } from './components/credito/credito.component';
import { DebitoComponent } from './components/debito/debito.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GeralComponent,
    TransacoesComponent,
    NotfoundComponent,
    BasicaComponent,
    ContatoComponent,
    EnderecoComponent,
    CreditoComponent,
    DebitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
