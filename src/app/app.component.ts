import { Component } from '@angular/core';
import { menuModel } from './models/menu.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelMascotas } from './models/mascotas.model';
import { ModelClientes } from './models/clientes.model';
import { concat } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'veterinaria';

  // vmostrar_modulo: string = "Login";
  // botonSeleccionado: string = "Login";

  // vmostrar_pantallaPrincipal: boolean = false;
  // vmostrar_registroClientes: boolean = false;

  

  // vIdentificacionClienteAnterior: string = "";

  

  // listaMenu: menuModel[] = [];

  // listaMascotas: ModelMascotas[] = [];
  // listaClientes: ModelClientes[] = [];

  // mascotaSeleccionada: any;

  // // listaConcatenada: (ModelMascotas | ModelClientes)[] = this.listaMascotas.concat(this.listaClientes);


  // vAgregarmascota: boolean = true;

  // formCrearMascota: FormGroup = new FormGroup({});

  // formCrearCliente: FormGroup = new FormGroup({});

  // constructor(
  //   private fb: FormBuilder) {



  //   this.formCrearMascota = this.fb.group({

  //     nombreMascota: ['', Validators.required],
  //     raza: ['', Validators.required],
  //     fechaNacimiento: ['', Validators.required],
  //     identificacionCliente: ['', Validators.required]
  //   });

  //   this.formCrearCliente = this.fb.group({
  //     nombreCliente: ['', Validators.required],
  //     identificacion: ['', Validators.required],
  //     direccion: ['', Validators.required],
  //     telefono: ['', Validators.required]
  //   });

  // }


  // get nombreClienteNoValido() {
  //   return this.formCrearCliente.get('nombreCliente')?.invalid && this.formCrearCliente.get('nombreCliente')?.touched;
  // }
  // get identificacionNoValido() {
  //   return this.formCrearCliente.get('identificacion')?.invalid && this.formCrearCliente.get('identificacion')?.touched;
  // }
  // get direccionNoValido() {
  //   return this.formCrearCliente.get('direccion')?.invalid && this.formCrearCliente.get('direccion')?.touched;
  // }
  // get telefonoNoValido() {
  //   return this.formCrearCliente.get('telefono')?.invalid && this.formCrearCliente.get('telefono')?.touched;
  // }

  // mostrarMenu(nombreMenu: string) {
  //   this.vmostrar_modulo = nombreMenu;
  //   this.botonSeleccionado = nombreMenu;
  // }

  // mostrarPantallaprincipal() {
  //   this.vmostrar_pantallaPrincipal = true;
  //   this.vmostrar_registroClientes = false;
  // }

  // mostrarRegistroClientes() {
  //   this.vmostrar_registroClientes = true;
  //   this.vmostrar_pantallaPrincipal = false;
  // }

}
