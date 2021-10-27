import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListarComponent } from './componentes/listar-citas/listar-citas.component';
import { RegistrarCitasComponent } from './componentes/registrar-citas/registrar-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarComponent,
    HomeComponent,
    RegistrarCitasComponent,
    LoginComponent,
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
