import { Injectable } from '@angular/core';
import { ModelClientes } from '../models/clientes.model';
import { ModelUsuarios } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  listaClientes: ModelClientes[] = [];
  listaUsuarios: ModelUsuarios[] = [];

  constructor() { }

  iniciarSesion(identificacion:string, contraseña:string){
    for(let i=0; i < this.listaUsuarios.length; i++){
      if (this.listaUsuarios[i].identificacionUsuario == identificacion && this.listaUsuarios[i].contraseña == contraseña) {
        return this.listaUsuarios[i];
      }
    }
    return undefined;
  }

  agregarCliente(cliente:ModelClientes) {
    this.listaClientes.push(cliente);
    console.log("lista clientes",this.listaClientes)
  }

  getClientes(identificacion:any){
    let vlistaClientes: ModelClientes[] = [];
    console.log("lista clientes get",this.listaClientes)
    if(identificacion != null){
      for(let i=0 ; i < this.listaClientes.length ; i++){
        if(identificacion == this.listaClientes[i].identificacion){
          vlistaClientes.push(this.listaClientes[i]);
          return vlistaClientes;
        }
      }
      return this.listaClientes;
    }else{
      return this.listaClientes;
    }
  }

  editarCliente(cliente:ModelClientes){
    for(let i=0 ; i < this.listaClientes.length ; i++){
      if(cliente.identificacion == this.listaClientes[i].identificacion){
        this.listaClientes[i] = cliente;
      }
    }
  }

  agregarUsuario(usuario:ModelUsuarios){
    this.listaUsuarios.push(usuario);
    console.log("lista usuarios", this.listaUsuarios)
  }

  obtenerUsuarioPorIdentificacion(identificacion:any){
    for(let i=0 ; i < this.listaUsuarios.length ; i++){
      if(identificacion == this.listaUsuarios[i].identificacionUsuario){
        return this.listaUsuarios[i];
      }
    }
    alert('identificacion invalida.');
    return undefined;
    
  }

  guardarUsuario(usuario: ModelUsuarios) {
    for(let i=0 ; i < this.listaUsuarios.length ; i++){
      if(usuario.identificacionUsuario == this.listaUsuarios[i].identificacionUsuario){
        this.listaUsuarios[i] = usuario;
        console.log("LISTA DE USUARIOS CON CAMBIO DE CONTRASEÑA", this.listaUsuarios);
      }
    }
  }
}
