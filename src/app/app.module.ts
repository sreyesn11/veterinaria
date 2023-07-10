import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ActualizarClienteComponent } from './pages/clientes/actualizar-cliente.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ActualizarMascotaComponent } from './pages/mascotas/actualizar-mascota.component';
import { CoreModule } from './core-module/core-module.module';
import { MenuComponent } from './pages/menu/menu.component';
import { ActualizarProductosComponent } from './pages/productos/actualizar-productos.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActualizarClienteComponent,
    ClientesComponent,
    LoginComponent,
    PagesComponent,
    MascotasComponent,
    ActualizarMascotaComponent,
    MenuComponent,
    ActualizarProductosComponent,
    ProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
