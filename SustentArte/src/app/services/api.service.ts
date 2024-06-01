import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  constructor() { }

  register(user: Usuario){
    return this._http.post<Usuario>('http://localhost:8000/api/product',user);
  }


}
