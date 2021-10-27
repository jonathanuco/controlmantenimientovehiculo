import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ListarComponent } from './componentes/listar-citas/listar-citas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarCitasComponent } from './componentes/registrar-citas/registrar-citas.component';

const routes: Routes = [
  { path: 'editar/:idPersona', component: RegistrarCitasComponent},
  { path: 'crear', component: RegistrarCitasComponent},
  { path: 'listar', component: ListarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '**' , pathMatch: 'full' , redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
