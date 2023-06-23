import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  vmostrar_pantallaPrincipal: boolean = false;
  vmostrar_registroClientes: boolean = false;
}
