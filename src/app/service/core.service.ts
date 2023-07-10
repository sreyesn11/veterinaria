import { Injectable } from '@angular/core';
import { ModelClientes } from '../models/clientes.model';
import { ModelUsuarios } from '../models/usuarios.model';
import { ModelMascotas } from '../models/mascotas.model';
import { Subject } from 'rxjs';
import { ModelProductos } from '../models/productos.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  listaClientes: ModelClientes[] = [];
  listaUsuarios: ModelUsuarios[] = [];
  listaMascotas: ModelMascotas[] = [];
  listaProductos: ModelProductos[] = [];
  listaPerfiles: string[] = ['ADMINISTRADOR', 'VENDEDOR', 'CLIENTE'];

  usuarioAutenticado!: any;
  usuarioAutenticado$ = new Subject<ModelUsuarios>();

  constructor(private sanitizer: DomSanitizer) {
    const administrador: ModelUsuarios = new ModelUsuarios();
    administrador.identificacionUsuario = 'admin';
    administrador.contraseña = 'admin123';
    administrador.perfilUsuario = 'ADMINISTRADOR';
    this.listaUsuarios.push(administrador);
  }

  iniciarSesion(identificacion: string, contraseña: string) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (this.listaUsuarios[i].identificacionUsuario == identificacion && this.listaUsuarios[i].contraseña == contraseña) {
        return this.listaUsuarios[i];
      }
    }
    return undefined;
  }

  autenticacionDeUsuario(usuarioAutenticado: ModelUsuarios) {
    this.usuarioAutenticado = usuarioAutenticado;
    this.usuarioAutenticado$.next(usuarioAutenticado);
  }

  getUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }

  getUsuarioAutenticado$() {
    return this.usuarioAutenticado$;
  }

  cerrarSesion(): void {
    this.usuarioAutenticado = null;
    this.usuarioAutenticado$.next(this.usuarioAutenticado);
  }

  agregarCliente(cliente: ModelClientes) {
    this.listaClientes.push(cliente);
    console.log("lista clientes", this.listaClientes);
  }

  agregarMascota(mascota: ModelMascotas) {
    this.listaMascotas.push(mascota);
    console.log("lista mascotas", this.listaMascotas);
    let vIdentificacionCliente = mascota.identificacionCliente;
    for (let i = 0; i < this.listaClientes.length; i++) {
      if (vIdentificacionCliente == this.listaClientes[i].identificacion) {
        if (this.listaClientes[i].mascotas == undefined) {
          this.listaClientes[i].mascotas = [];
        }
        this.listaClientes[i].mascotas.push(mascota);
      }
    }
  }

  agregarMascotas(mascota: ModelMascotas[]) {
    Array.prototype.push.apply(this.listaMascotas, mascota);
    console.log(" mascotas", mascota);
    let vIdentificacionCliente = mascota[0].identificacionCliente;
    for (let i = 0; i < this.listaClientes.length; i++) {
      if (vIdentificacionCliente == this.listaClientes[i].identificacion) {
        if (this.listaClientes[i].mascotas == undefined) {
          this.listaClientes[i].mascotas = mascota;
        }
        else {
          Array.prototype.push.apply(this.listaClientes[i].mascotas, mascota);
        }
      }
    }
  }

  getClientes(identificacion: any): ModelClientes[] {
    let vlistaClientes: ModelClientes[] = [];
    console.log("lista clientes get", this.listaClientes);
    if (identificacion != null) {
      for (let i = 0; i < this.listaClientes.length; i++) {
        if (identificacion == this.listaClientes[i].identificacion) {
          vlistaClientes.push(this.listaClientes[i]);
          return vlistaClientes;
        }
      }
      return this.listaClientes;
    } else {
      return this.listaClientes;
    }
  }

  editarCliente(cliente: ModelClientes) {
    for (let i = 0; i < this.listaClientes.length; i++) {
      if (cliente.identificacion == this.listaClientes[i].identificacion) {
        this.listaClientes[i] = cliente;
      }
    }
  }

  getMascotas(nombreMascota: any) {
    let vlistaMascotas: ModelMascotas[] = [];
    console.log("lista mascotas get", this.listaMascotas);
    if (nombreMascota != null) {
      for (let i = 0; i < this.listaMascotas.length; i++) {
        if (nombreMascota == this.listaMascotas[i].nombreMascota) {
          vlistaMascotas.push(this.listaMascotas[i]);
          return vlistaMascotas;
        }
      }
      return this.listaMascotas;
    } else {
      return this.listaMascotas;
    }
  }

  editarMascota(mascota: ModelMascotas) {
    for (let i = 0; i < this.listaMascotas.length; i++) {
      if (mascota.identificacionCliente == this.listaMascotas[i].identificacionCliente) {
        this.listaMascotas[i] = mascota;
      }
    }
  }

  agregarUsuario(usuario: ModelUsuarios) {
    this.listaUsuarios.push(usuario);
    console.log("lista usuarios", this.listaUsuarios);
  }

  obtenerUsuarioPorIdentificacion(identificacion: any) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (identificacion == this.listaUsuarios[i].identificacionUsuario) {
        return this.listaUsuarios[i];
      }
    }
    alert('Identificación inválida.');
    return undefined;
  }

  guardarUsuario(usuario: ModelUsuarios) {
    for (let i = 0; i < this.listaUsuarios.length; i++) {
      if (usuario.identificacionUsuario == this.listaUsuarios[i].identificacionUsuario) {
        this.listaUsuarios[i] = usuario;
        console.log("LISTA DE USUARIOS CON CAMBIO DE CONTRASEÑA", this.listaUsuarios);
      }
    }
  }

  // Funciones de gestión de productos

  agregarProducto(producto: ModelProductos) {
    this.listaProductos.push(producto);
    console.log("lista productos", this.listaProductos);
  }

  editarProducto(producto: ModelProductos) {
    for (let i = 0; i < this.listaProductos.length; i++) {
      if (producto.id == this.listaProductos[i].id) {
        this.listaProductos[i] = producto;
      }
    }
  }

  getProductos(identificacion: any): ModelProductos[] {
    let vlistaProductos: ModelProductos[] = [];
    console.log("lista productos get", this.listaProductos);
    if (identificacion != null) {
      for (let i = 0; i < this.listaProductos.length; i++) {
        if (identificacion == this.listaProductos[i].id) {
          vlistaProductos.push(this.listaProductos[i]);
          return vlistaProductos;
        }
      }
      return this.listaProductos;
    } else {
      return this.listaProductos;
    }
  }

  eliminarProducto(producto: ModelProductos) {
    const index = this.listaProductos.indexOf(producto);
    if (index !== -1) {
      this.listaProductos.splice(index, 1);
    }
  }

  getBase64 = ($event: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        
        reader.onload = () => {
          resolve(reader.result as string);
        };
  
        reader.onerror = () => {
          resolve('');
        };
        
        reader.readAsDataURL($event);
      } catch (e) {
        resolve('');
      }
    });
  };
}

