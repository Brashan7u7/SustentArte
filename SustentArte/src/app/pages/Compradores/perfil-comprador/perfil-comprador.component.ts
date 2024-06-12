import { Component, inject } from '@angular/core';
import { CompradoresInterface } from '../../../interfaces/compradores.interface';
import { ApiService } from '../../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-comprador',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil-comprador.component.html',
  styleUrl: './perfil-comprador.component.css'
})
export class PerfilCompradorComponent {

  private apiService = inject(ApiService);
  comprador = <CompradoresInterface>{};
  idComprador = "";
  constructor() {
    this.idComprador = sessionStorage.getItem('id_comprador')||"";
    console.log(this.idComprador);

    this.apiService.obtenerComprador(this.idComprador).subscribe((res:CompradoresInterface) => {
      this.comprador = res;
      console.log(this.comprador);
    });
  }
}
