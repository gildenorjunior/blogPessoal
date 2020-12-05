import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //adicionando a home como rota padrão
  {path: 'home', component: HomeComponent}, //adicionando rota para home
  {path: 'feed', component: FeedComponent}, //adicionando rota para o feed
  {path: 'login', component: LoginComponent}, //adicionando rota para o login
  {path: 'cadastro', component: CadastroComponent}, //adicionando rota para o cadastro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
