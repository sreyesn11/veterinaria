import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ActualizarMascotaComponent } from './pages/mascotas/actualizar-mascota.component';
import { ActualizarClienteComponent } from './pages/clientes/actualizar-cliente.component';
import { PerfilAdministradorGuard } from './service/perfil-administrador.guard';
import { ProductosComponent } from './pages/productos/productos.component';
import { ActualizarProductosComponent } from './pages/productos/actualizar-productos.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {
    path: 'administrador',
     component: PagesComponent,
      canActivate: [PerfilAdministradorGuard],
      children: [
      {path: 'clientes', component: ClientesComponent },
      {path:'actualizarClientes/:identificacion',component:ActualizarClienteComponent},
      {path:'mascotas', component: MascotasComponent},
      {path:'actualizarMascotas/:identificacion',component:ActualizarMascotaComponent},
      {path:'productos', component: ProductosComponent},
      {path:'actualizarProductos/:identificacion',component:ActualizarProductosComponent},

      // { path: '', redirectTo:'login', pathMatch:'full'},
      // { path: '**', redirectTo:'login', pathMatch:'full'}
    ]
  },
  {
    path: 'cliente',
    component: PagesComponent,
    children:[]
  }
  ,{ path: '', redirectTo:'login', pathMatch:'full'}
  ,{ path: '**', redirectTo:'login', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
