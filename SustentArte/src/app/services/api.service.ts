import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';
import { ProductosInterface } from '../interfaces/producto.interface';
import { CategoriaInterface } from '../interfaces/categoria.interface';
import { ArtesanoInterface } from '../interfaces/artesano.interface';
import { MaterialesInterface } from '../interfaces/materiales.interface';
import { CompradoresInterface } from '../interfaces/compradores.interface';
import { Admin } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  constructor() { }

  

  crearComprador(comprador: CompradoresInterface){
    return this._http.post<CompradoresInterface>('http://localhost:3000/compradores', comprador,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  editarComprador(comprador: CompradoresInterface,id:number){
    return this._http.put<CompradoresInterface>(`http://localhost:3000/compradores/${id}`, comprador,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  
  //////////////////////////////////////////////////////////
  ////////////////////////Materiales////////////////////////
  //////////////////////////////////////////////////////////
  agregarMaterial(material: MaterialesInterface) {
    return this._http.post<MaterialesInterface>('http://localhost:3000/materiales', material,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  obtenerMateriales(){
    return this._http.get<any[]>('http://localhost:3000/materiales');
  }
  obtenerMaterial(id: number){
    return this._http.get<MaterialesInterface>(`http://localhost:3000/materiales/${id}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  eliminarMaterial(material : MaterialesInterface) {
    return this._http.delete(`http://localhost:3000/materiales/${material.id_material}`);
  }
  editarMaterial(material : MaterialesInterface,id:number){
    console.log(material)
    return this._http.put<CategoriaInterface>(`http://localhost:3000/materiales/`+id,material,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }



  //////////////////////////////////////////////////////////
  ////////////////////////Productos/////////////////////////
  //////////////////////////////////////////////////////////
  obtenerProductos(){
    return this._http.get<ProductosInterface[]>('http://localhost:3000/productos',{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  obtenerProducto(id: number){
    return this._http.get<ProductosInterface>(`http://localhost:3000/productos/${id}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  
  }
  eliminarProducto(id: number) {
    return this._http.delete(`http://localhost:3000/productos/${id}`, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }


  //////////////////////////////////////////////////////////
  ////////////////////////Categorias/////////////////////////
  //////////////////////////////////////////////////////////
  agregarCategoria(categoria: CategoriaInterface) {
    console.log(categoria);
    return this._http.post<CategoriaInterface>('http://localhost:3000/categorias',categoria,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  obtenerCategorias(){
    return this._http.get<CategoriaInterface[]>('http://localhost:3000/categorias',{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  obtenerCategoria(id:number){
    return this._http.get<CategoriaInterface>(`http://localhost:3000/categorias/${id}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  eliminarCategoria(categoria: CategoriaInterface) {
    return this._http.delete(`http://localhost:3000/categorias/${categoria.id_categoria}`);
  }
  editarCategoria(categoria : CategoriaInterface,id:number){
    console.log(categoria)
    return this._http.put<CategoriaInterface>(`http://localhost:3000/categorias/`+id,categoria,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  




  //////////////////////////////////////////////////////////
  ////////////////////////Filtros///////////////////////////
  //////////////////////////////////////////////////////////
  obtenerProductosxArtesano(id: number){
    return this._http.get<ProductosInterface[]>(`http://localhost:3000/productos/artesano/${id}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  obtenerProductosxCategorias(categoria: string){
    return this._http.get<ProductosInterface[]>(`http://localhost:3000/productos/categoria/${categoria}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  
  


  //////////////////////////////////////////////////////////
  ////////////////////////Adimnistrador/////////////////////
  //////////////////////////////////////////////////////////
  loginAdmin(admin: Admin) {
    console.log(admin);
    return this._http.post<CategoriaInterface>('http://localhost:3000/admin/login',admin,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  obtenerArtesanos()
  {
    return this._http.get<ArtesanoInterface[]>('http://localhost:3000/artesanos',{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  obtenerArtesano(id: number)
  {
    return this._http.get<ArtesanoInterface>(`http://localhost:3000/artesanos/${id}`,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  crearArtesano(artesano: ArtesanoInterface){
    return this._http.post<any>('http://localhost:3000/artesanos',artesano,{ headers: { 'Access-Control-Allow-Origin': '*' } });
    
  }
  editarArtesano(artesano: ArtesanoInterface,id:number){
    return this._http.put<any>(`http://localhost:8000/artesanos/${id}`,artesano,{ headers: { 'Access-Control-Allow-Origin': '*' } });
    
  }
  eliminarArtesano(id: number) {
    return this._http.delete(`http://localhost:3000/artesanos/${id}`);
  }




  //////////////////////////////////////////////////////////
  ////////////////////////Artesanos/////////////////////////
  //////////////////////////////////////////////////////////

  loginArtesano(artesano: ArtesanoInterface) {
    console.log(artesano);
    return this._http.post<CategoriaInterface>('http://localhost:3000/atesanos/login',artesano,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
  agregarProducto(product: ProductosInterface){
    return this._http.post<ProductosInterface>('http://localhost:3000/productos',product,{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

}
