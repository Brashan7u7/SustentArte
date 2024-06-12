import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-comprador',
  standalone: true,
  imports: [],
  templateUrl: './perfil-comprador.component.html',
  styleUrl: './perfil-comprador.component.css'
})
export class PerfilCompradorComponent {

  idComprador = "";
  constructor() {
    this.idComprador = sessionStorage.getItem('id_comprador')||"";
    console.log(this.idComprador);
    
  }
}
