import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelProductos } from 'src/app/models/productos.model';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-productos.component.html',
  styleUrls: ['./actualizar-productos.component.css']
})
export class ActualizarProductosComponent {

  formCrearProducto: FormGroup = new FormGroup({});
  productoEditar!: ModelProductos;



  constructor(
    private fb: FormBuilder,
    private serviceCore: CoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.formCrearProducto = this.fb.group({
      id: ['', Validators.required],
      nombreProducto: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    let identificacion = this.activatedRoute.snapshot.paramMap.get('identificacion');
    if (identificacion != 'creacionproducto') {
      console.log("ACTUALIZAR PRODUCTO", identificacion)
      let listaProductos: ModelProductos[] = this.serviceCore.getProductos(identificacion);
      if (listaProductos.length > 0) {
        this.productoEditar = listaProductos[0];
        this.formCrearProducto.patchValue({
          id: this.productoEditar.id,
          nombreProducto: this.productoEditar.nombreProducto,
          descripcion: this.productoEditar.descripcion,
          precio: this.productoEditar.precio
        })
      }
    }
  }


  get idProductoNoValido() {
    return this.formCrearProducto.get('id')?.invalid && this.formCrearProducto.get('id')?.touched;
  }
  get nombreProductoNoValido() {
    return this.formCrearProducto.get('nombreProducto')?.invalid && this.formCrearProducto.get('nombreProducto')?.touched;
  }
  get descripcionNoValido() {
    return this.formCrearProducto.get('descripcion')?.invalid && this.formCrearProducto.get('descripcion')?.touched;
  }
  get precioNoValido() {
    return this.formCrearProducto.get('precio')?.invalid && this.formCrearProducto.get('precio')?.touched;
  }
  get imagenNoValido() {
    return this.formCrearProducto.get('imagen')?.invalid && this.formCrearProducto.get('imagen')?.touched;
  }

  agregarProducto() {
    if (this.formCrearProducto.invalid) {
      return;
    }
    let producto: ModelProductos = this.formCrearProducto.value;
    if (this.productoEditar && this.productoEditar.id) {
      this.serviceCore.editarProducto(producto);
    } else {
      this.serviceCore.agregarProducto(producto);
    }
    this.formCrearProducto.reset();
    this.router.navigate(['/administrador/productos'])
  }

  // agregarProducto() {
  //   if (this.formCrearProducto.invalid) {
  //     return;
  //   }
  //   const producto: ModelProductos = this.formCrearProducto.value;
  //   if (this.productoEditar && this.productoEditar.id) {
  //     this.serviceCore.editarProducto(producto);
  //   } else {
  //     this.serviceCore.agregarProducto(producto);
  //   }
  //   this.formCrearProducto.reset();
  //   this.router.navigate(['/administrador/productos']);
  // }

  async actualizarImagen(event: any) {

    let imagenCapturada = event.target.files[0];
    const base64:string = await this.serviceCore.getBase64(imagenCapturada);
    console.log(base64);
    // this.serviceCore.getBase64(imagenCapturada).then((resImagen:any)=>{
    this.formCrearProducto.patchValue({
      imagen: base64
    });
    // });


  }

}

