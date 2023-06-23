import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelClientes } from 'src/app/models/clientes.model';
import { CoreService } from 'src/app/service/core.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {

  formCrearCliente: FormGroup = new FormGroup({});
  clienteEditar!: ModelClientes;

  constructor(
    private fb: FormBuilder,
    private serviceCore: CoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.formCrearCliente = this.fb.group({
      nombreCliente: ['', Validators.required],
      identificacion: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let identificacion = this.activatedRoute.snapshot.paramMap.get('identificacion');
    if (identificacion != 'creacioncliente') {
      console.log("ACTUALIZAR CLIENTE", identificacion)
      let listaClientes: ModelClientes[] = this.serviceCore.getClientes(identificacion);
      if (listaClientes.length > 0) {
        this.clienteEditar = listaClientes[0];
        this.formCrearCliente.patchValue({
          nombreCliente: this.clienteEditar.nombreCliente,
          identificacion: this.clienteEditar.identificacion,
          direccion: this.clienteEditar.direccion,
          telefono: this.clienteEditar.telefono
        })
      }
    }
  }

  get nombreClienteNoValido() {
    return this.formCrearCliente.get('nombreCliente')?.invalid && this.formCrearCliente.get('nombreCliente')?.touched;
  }
  get identificacionNoValido() {
    return this.formCrearCliente.get('identificacion')?.invalid && this.formCrearCliente.get('identificacion')?.touched;
  }
  get direccionNoValido() {
    return this.formCrearCliente.get('direccion')?.invalid && this.formCrearCliente.get('direccion')?.touched;
  }
  get telefonoNoValido() {
    return this.formCrearCliente.get('telefono')?.invalid && this.formCrearCliente.get('telefono')?.touched;
  }

  agregarCliente() {
    if (this.formCrearCliente.invalid) {
      return;
    }
    let cliente: ModelClientes = this.formCrearCliente.value;
    if (this.clienteEditar && this.clienteEditar.identificacion){
      this.serviceCore.editarCliente(cliente);
    }else{
      this.serviceCore.agregarCliente(cliente);
    }
    this.formCrearCliente.reset();
    this.router.navigate(['/clientes'])
  }

  // mostrarPantallaprincipal() {
  //   this.vmostrar_pantallaPrincipal = true;
  //   this.vmostrar_registroClientes = false;
  // }

  // mostrarRegistroClientes() {
  //   this.vmostrar_registroClientes = true;
  //   this.vmostrar_pantallaPrincipal = false;
  // }
}
