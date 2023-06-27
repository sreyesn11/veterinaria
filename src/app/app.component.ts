import { Component } from '@angular/core';
import { menuModel } from './models/menu.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModelMascotas } from './models/mascotas.model';
import { ModelClientes } from './models/clientes.model';
import { concat } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
