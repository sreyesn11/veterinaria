import { Component } from '@angular/core';
import { ModelClientes } from 'src/app/models/clientes.model';
import { CoreService } from 'src/app/service/core.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  listaClientes: ModelClientes[] = [];
  vClienteSeleccionado!: ModelClientes;
  vIdentificacionClienteAnterior: string = "";

  constructor(private serviceCore:CoreService,private router: Router){
    
  }

  ngOnInit(): void {
    this.listaClientes = this.serviceCore.getClientes(null);
  }

  mostrarMascota(vClienteSeleccionado:ModelClientes){
    this.vClienteSeleccionado = vClienteSeleccionado;
    document.getElementById("btnmodalMascotas")?.click();
  }

  agregarCliente(){
    this.router.navigate(['/actualizarClientes/creacioncliente'])
  }

  editarCliente(identificacion:any){
    this.router.navigate(['/actualizarClientes/'+ identificacion])
  }
}
