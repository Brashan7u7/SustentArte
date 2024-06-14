import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidosArtesanosInterface } from '../../../interfaces/pedidosArtesanos.interface';
import { ApiService } from '../../../services/api.service';
import { CompradoresInterface } from '../../../interfaces/compradores.interface';

@Component({
  selector: 'app-ver-ventas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-ventas.component.html',
  styleUrl: './ver-ventas.component.css'
})
export class VerVentasComponent {

  private apiService = inject(ApiService);

  ventas = Array<PedidosArtesanosInterface>();

  constructor() {
    const idArtesano = Number(sessionStorage.getItem('id_artesano')) || 0;

    this.apiService.pedidoArtesano(idArtesano).subscribe((ventas:Array<PedidosArtesanosInterface>) => {
      this.ventas = ventas;
      console.log(ventas);
      
      ventas.forEach((venta:PedidosArtesanosInterface) => {
        this.apiService.obtenerComprador(venta.idComprador.toString()).subscribe((comprador:CompradoresInterface) => {
          venta.comprador = comprador;
        });
    });
  });
} 


}
