import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuarioAutenticado!:any;

  constructor(private serviceCore: CoreService,
    private router: Router){
  }

  ngOnInit(){
    this.serviceCore.getUsuarioAutenticado$().subscribe(user=>this.usuarioAutenticado=user);
  }
}
