import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TemaComponent } from './tema/tema.component';
<<<<<<< HEAD
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
/*import { QuemSomosComponent } from './quem-somos/quem-somos.component';*/
=======
/*import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';*/

>>>>>>> c122bbed4b82171e607d6b1450e50587c2d6ed1d

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch:'full'},
  {path:'entrar', component:EntrarComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'tema', component:TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent },
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
<<<<<<< HEAD
  {path: 'fale-conosco', component: FaleConoscoComponent},
=======
  {path: 'ladingPage', component: LandingPageComponent},
>>>>>>> c122bbed4b82171e607d6b1450e50587c2d6ed1d
  /*{path: 'quem-somos', component: QuemSomosComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
