import { Component } from '@angular/core';
import { menuModel } from './models/menu.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelMascotas } from './models/mascotas.model';
import { ModelClientes } from './models/clientes.model';
import { concat } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { CoreService } from './service/core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = '';
  usuarioAutenticado!: any;

  constructor(private router: Router,
    private serviceCore: CoreService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  
  ngOnInit(){
    this.serviceCore.getUsuarioAutenticado$().subscribe(user=>this.usuarioAutenticado=user);
  }

  getUsuarioAutenticado(){
    this.usuarioAutenticado = this.serviceCore.getUsuarioAutenticado();
  }
}
