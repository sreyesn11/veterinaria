import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModelProductos } from 'src/app/models/productos.model';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  listaProductos: ModelProductos[] = [];
  vProductoSeleccionado!: ModelProductos;
  

  constructor(private serviceCore:CoreService,
    private router: Router){
    
  }

  ngOnInit(): void {
    this.listaProductos = this.serviceCore.getProductos(null);
  }

  agregarProducto(){
    this.router.navigate(['administrador/actualizarProductos/creacionproducto'])
  }

  editarProducto(identificacion:any){
    this.router.navigate(['administrador/actualizarProductos/'+ identificacion])
  }
  
  eliminarProducto(producto: any) {
    const index = this.listaProductos.indexOf(producto);
    if (index !== -1) {
      this.listaProductos.splice(index, 1);
    }
  }
}
