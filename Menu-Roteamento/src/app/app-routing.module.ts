import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { GeralComponent } from './components/geral/geral.component';
import { TransacoesComponent } from './components/transacoes/transacoes.component';
import { BasicaComponent } from './components/basica/basica.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EnderecoComponent } from './components/endereco/endereco.component';
import { CreditoComponent } from './components/credito/credito.component';
import { DebitoComponent } from './components/debito/debito.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {
    path: '', title: 'Início', component: InicioComponent,

  },

  { path: 'inicio',
    title: 'Início',
    component: InicioComponent

  },
  {path: 'geral',
    title: 'Geral',
    component: GeralComponent,
    children: [

      {path: '', redirectTo: 'basica', pathMatch:'full'},
      {path: 'basica', title:'Básico', component: BasicaComponent},
      {path: 'contato', title:'Contato', component: ContatoComponent},
      {path: 'endereco',title: 'Endereço', component: EnderecoComponent},

    ],

  },

  {path: 'transacoes',
    title: 'transações',
    component: TransacoesComponent,
    children: [

      { path: 'credito', title:'Crédito', component: CreditoComponent },
      { path: 'debito', title:'Débito', component: DebitoComponent },
      { path: '', redirectTo: 'credito', pathMatch: 'full' },

    ]

  },

  { path: '**',
    title: 'Página Não encontrada',
    component: NotfoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
