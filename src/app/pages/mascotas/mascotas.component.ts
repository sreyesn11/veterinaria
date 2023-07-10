import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelClientes } from 'src/app/models/clientes.model';
import { ModelMascotas } from 'src/app/models/mascotas.model';
import { CoreService } from 'src/app/service/core.service';



@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {
  listaMascotas: ModelMascotas[] = [];
  listaClientes: ModelClientes[] = [];

  vIdentificacionClienteAnterior: string = "";
  vMensajeNotificacion: string = "";
  constructor(private serviceCore: CoreService, private router: Router) {

  }

  ngOnInit(): void {
    this.listaMascotas = this.serviceCore.getMascotas(null);
  }

  editarMascota(nombreMascota:any){
    this.router.navigate(['/actualizarMascotas/'+ nombreMascota])
  }

  eliminarMascota(mascota: any) {
    const index = this.listaMascotas.indexOf(mascota);
    if (index !== -1) {
      this.listaMascotas.splice(index, 1);
    }
  }

}
