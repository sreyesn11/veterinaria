import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuModel } from 'src/app/models/menu.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelUsuarios } from 'src/app/models/usuarios.model';
import { CoreService } from 'src/app/service/core.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formCrearUsuario: FormGroup = new FormGroup({});
  formRecuperarContrase: FormGroup = new FormGroup({});


  vmostrar_modulo: string = "Login";
  botonSeleccionado: string = "Login";

  // vmostrar_pantallaPrincipal: boolean = false;
  // vmostrar_registroClientes: boolean = false;

  listaMenu: menuModel[] = [];

  constructor(private router: Router,
    private serviceCore: CoreService,
    private fb: FormBuilder) {

    let menuLogin: menuModel = new menuModel();
    menuLogin.nombre = "Login";
    menuLogin.icono = "fas fa-sign-in-alt";

    let menuRegister: menuModel = new menuModel();
    menuRegister.nombre = "Register";
    menuRegister.icono = "fas fa-user-plus";

    let menuRecoverPassword: menuModel = new menuModel();
    menuRecoverPassword.nombre = "Recover Password";
    menuRecoverPassword.icono = "fas fa-key";

    this.listaMenu.push(menuLogin);
    this.listaMenu.push(menuRegister);
    this.listaMenu.push(menuRecoverPassword);

    this.formCrearUsuario = this.fb.group({
      nombreUsuario: ['', Validators.required],
      telefonoUsuario: ['', Validators.required],
      emailUsuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      contraseñaConfirmada: ['', Validators.required],
      identificacionUsuario: ['', Validators.required]
    });

    this.formRecuperarContrase = this.fb.group({
      identificacionRecuperacion: ['', Validators.required],
      contraseñaRecuperacion: ['', Validators.required],
      confirmaContraRecuperacion: ['', Validators.required],
    })
  }

  get nombreUsuarioNoValido() {
    return this.formCrearUsuario.get('nombreUsuario')?.invalid && this.formCrearUsuario.get('nombreUsuario')?.touched;
  }
  get telefonoUsuarioNoValido() {
    return this.formCrearUsuario.get('telefonoUsuario')?.invalid && this.formCrearUsuario.get('telefonoUsuario')?.touched;
  }
  get emailNoValido() {
    return this.formCrearUsuario.get('emailUsuario')?.invalid && this.formCrearUsuario.get('emailUsuario')?.touched;
  }
  get contraseNoValido() {
    return this.formCrearUsuario.get('contraseña')?.invalid && this.formCrearUsuario.get('contraseña')?.touched;
  }
  get contraseConfirmadaNoValido() {
    return this.formCrearUsuario.get('contraseñaConfirmada')?.invalid && this.formCrearUsuario.get('contraseñaConfirmada')?.touched ||
      this.formCrearUsuario.get('contraseñaConfirmada')?.value != this.formCrearUsuario.get('contraseña')?.value;
  }
  get identificacionUsuarioNoValido() {
    return this.formCrearUsuario.get('identificacionUsuario')?.invalid && this.formCrearUsuario.get('identificacionUsuario')?.touched;
  }


  get identificacionRecuperacionNoValido() {
    return this.formRecuperarContrase.get('identificacionRecuperacion')?.invalid && this.formRecuperarContrase.get('identificacionRecuperacion')?.touched;
  }
  get contraseRecuperacionNoValido() {
    return this.formRecuperarContrase.get('contraseñaRecuperacion')?.invalid && this.formRecuperarContrase.get('contraseñaRecuperacion')?.touched;
  }
  get contraseRecuperacionConfirmadaNoValido() {
    return this.formRecuperarContrase.get('confirmaContraRecuperacion')?.invalid && this.formRecuperarContrase.get('confirmaContraRecuperacion')?.touched ||
      this.formRecuperarContrase.get('confirmaContraRecuperacion')?.value != this.formRecuperarContrase.get('contraseñaRecuperacion')?.value;
  }

  agregarUsuario() {
    if (this.formCrearUsuario.invalid) {
      return;
    }
    let usuario: ModelUsuarios = this.formCrearUsuario.value;
    this.serviceCore.agregarUsuario(usuario);
    this.formCrearUsuario.reset();
    this.router.navigate(['/clientes'])
  }

  recuperarContrase() {
    if (this.formRecuperarContrase.valid) {
      let identificacion = this.formRecuperarContrase.value.identificacionRecuperacion;
      let nuevaContraseña = this.formRecuperarContrase.value.contraseñaRecuperacion;
      let nuevaContraseñaConfirmada = this.formRecuperarContrase.value.confirmaContraRecuperacion;
      let usuario = this.serviceCore.obtenerUsuarioPorIdentificacion(identificacion);
      if (usuario) {
        usuario.contraseña = nuevaContraseña;
        usuario.contraseñaConfirmada = nuevaContraseñaConfirmada;
        this.serviceCore.guardarUsuario(usuario);
        alert('Cambio de contraseña realizado.');
        this.formRecuperarContrase.reset();
      }
      else{
        alert('Cambio de contraseña no realizado.');
      }
    }
  }


  mostrarMenu(nombreMenu: string) {
    this.vmostrar_modulo = nombreMenu;
    this.botonSeleccionado = nombreMenu;
  }

  mostrarPantallaprincipal() {
    // this.vmostrar_pantallaPrincipal = true;
    // this.vmostrar_registroClientes = false;
    this.router.navigate(['/clientes']);
  }
}
