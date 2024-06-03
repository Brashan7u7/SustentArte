import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  constructor() { }

  crearArtesano(artesano: any){
    //return this._http.post<any>('http://localhost:8000/api/product',user);
    console.log(artesano);
  }

  crearComprador(comprador: any){
    //return this._http.post<any>('http://localhost:8000/api/comprador', comprador);
    console.log(comprador)
  }

  agregarMaterial(material: any) {
    //return this._http.post<any>('http://localhost:8000/api/material', material);
    console.log(material)
  }

  agregarCategoria(categoria: any) {
    //return this._http.post<any>('http://localhost:8000/api/categoria', categoria);
    console.log(categoria)
  }

  obtenerMateriales(){
    return this._http.get<any[]>('http://localhost:8000/api/materiales');
  }
  obtenerProductos(){
    return this._http.get<any[]>('http://localhost:3000/productos');
  }
  obtenerCategorias(){
    return this._http.get<any[]>('http://localhost:8000/api/materiales');
  }

  eliminarMaterial(id: number) {
    return this._http.delete(`http://localhost:8000/api/materiales/${id}`);
  }
}
