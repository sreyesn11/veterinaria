import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  vmostrar_pantallaPrincipal: boolean = false;
  vmostrar_registroClientes: boolean = false;
}
