import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ActualizarMascotaComponent } from './pages/mascotas/actualizar-mascota.component';
import { ActualizarClienteComponent } from './pages/clientes/actualizar-cliente.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: '', component: PagesComponent, children: [
      { path: 'clientes', component: ClientesComponent },
      {path:'actualizarClientes/:identificacion',component:ActualizarClienteComponent},
      {path:'mascotas', component: MascotasComponent},
      {path:'actualizarMascotas',component:ActualizarMascotaComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
