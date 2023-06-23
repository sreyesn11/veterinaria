import { Component } from '@angular/core';
import { ModelMascotas } from 'src/app/models/mascotas.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelClientes } from 'src/app/models/clientes.model';

@Component({
  selector: 'app-actualizar-mascota',
  templateUrl: './actualizar-mascota.component.html',
  styleUrls: ['./actualizar-mascota.component.css']
})
export class ActualizarMascotaComponent {

  listaMascotas: ModelMascotas[] = [];
  listaClientes: ModelClientes[] = [];

  vIdentificacionClienteAnterior: string = "";
  vMensajeNotificacion: string = "";

  vclientesRegistrados: boolean = false;

  mascotaSeleccionada: any;

  formCrearMascota: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {

    this.formCrearMascota = this.fb.group({

      nombreMascota: ['', Validators.required],
      raza: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      identificacionCliente: ['', Validators.required]
    });
  }

  get nombreMascotaNoValido() {
    return this.formCrearMascota.get('nombreMascota')?.invalid && this.formCrearMascota.get('nombreMascota')?.touched;
  }
  get razaNoValido() {
    return this.formCrearMascota.get('raza')?.invalid && this.formCrearMascota.get('raza')?.touched;
  }
  get fechaNacimientoNoValido() {
    return this.formCrearMascota.get('fechaNacimiento')?.invalid && this.formCrearMascota.get('fechaNacimiento')?.touched;
  }

  cambioDeUsuario() {
    if (this.listaMascotas.length > 0) {
      this.vMensajeNotificacion = "¿Esta seguro que quiere cambiar de cliente a " + this.formCrearMascota.value.identificacionCliente;
      document.getElementById("modalNotificacion")?.click();
      console.log("CAMBIO DE USUARIO REALIZADO")
    }
  }

  editarMascota(mascota: any) {
    this.mascotaSeleccionada = mascota;
    this.formCrearMascota.patchValue({
      nombreMascota: mascota.nombreMascota,
      raza: mascota.raza,
      fechaNacimiento: mascota.fechaNacimiento
    });

    const index = this.listaMascotas.indexOf(mascota);
    if (index !== -1) {
      this.listaMascotas.splice(index, 1);
    }
  }

  registrarMascota() {
    if (this.formCrearMascota.invalid) {
      return;
    }
    console.log("DATOS MASCOTA", this.formCrearMascota.value);
    let mascota: ModelMascotas = this.formCrearMascota.value;
    this.listaMascotas.push(mascota);
    console.log("LISTA DE MASCOTAS", this.listaMascotas)
    // this.formCrearMascota.reset();
    this.vIdentificacionClienteAnterior = this.formCrearMascota.value.identificacionCliente;
    console.log("NOMBRE ANTERIOR",this.vIdentificacionClienteAnterior)
  }

  guardarMascota() {
    if(this.listaMascotas.length == 0){
      return;
    }
    for(let i=0; i < this.listaClientes.length; i++){
      if(this.listaClientes[i].identificacion == this.vIdentificacionClienteAnterior){
        this.listaClientes[i].mascotas = this.listaMascotas;
        break;
      }
    }
    this.vMensajeNotificacion = "¿Esta seguro que quiere guardar la mascota registrada?";
    document.getElementById("modalNotificacion")?.click();
    this.listaMascotas = [];
    console.log("LISTA DE CLIENTES", this.listaClientes)
  }

  eliminarMascota(mascota: any) {
    const index = this.listaMascotas.indexOf(mascota);
    if (index !== -1) {
      this.listaMascotas.splice(index, 1);
    }
  }

  cancelarCambioDeUsuario(){
    this.formCrearMascota.patchValue({
      identificacionCliente:this.vIdentificacionClienteAnterior
    });
    console.log("SE REALIZO LLAMADO A LA FUNCION CANCELAR CAMBIO DE USUARIO")
  }

  eliminarMascotasRegistradas() {
    this.listaMascotas = [];
  }


}
