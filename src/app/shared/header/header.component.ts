import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModelUsuarios } from 'src/app/models/usuarios.model';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  usuarioAutenticado: ModelUsuarios | undefined;

  constructor(private serviceCore: CoreService, private router: Router) {}

  ngOnInit(): void {
    this.serviceCore.getUsuarioAutenticado$().subscribe((user: ModelUsuarios | undefined) => {
      this.usuarioAutenticado = user;
    });
  }

  cerrarSesion(): void {
    this.serviceCore.cerrarSesion();
    this.router.navigate(['/login']);
  }
}
