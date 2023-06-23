import { ModelMascotas } from "./mascotas.model";

export class ModelClientes{
    public identificacion:string = '';
    public nombreCliente:string = '';
    public direccion:string='';
    public telefono:number = 0;
    public mascotas:ModelMascotas[] = [];
}