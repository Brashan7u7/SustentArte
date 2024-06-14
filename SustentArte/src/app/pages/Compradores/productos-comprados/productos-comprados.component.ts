import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidosInterface } from '../../../interfaces/pedidos.interface';
import { ApiService } from '../../../services/api.service';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { pedidoProductoInterface } from '../../../interfaces/pedidoProductos.interface';
import { bodyCompras } from '../../../interfaces/bodyCompras.interface';
import { ProductosArray } from '../../../interfaces/productosArray.interface';
import { PedidoDetalleInterface } from '../../../interfaces/pedidoDetalle.interface';
import { PedidosArtesanosInterface } from '../../../interfaces/pedidosArtesanos.interface';

@Component({
  selector: 'app-productos-comprados',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productos-comprados.component.html',
  styleUrl: './productos-comprados.component.css'
})
export class ProductosCompradosComponent {

  private apiService = inject(ApiService);

  idComprador = "";

  pedidosComprador = Array<PedidosArtesanosInterface>();

  pedidosComprados = Array<any>();

  productosComprados = Array<any>();

  comprasComprador = Array<bodyCompras>();

  constructor() {

    this.idComprador = sessionStorage.getItem('id_comprador')||"";
    this.apiService.pedidosComprador(this.idComprador).subscribe(
      {
        next: (data) => {
          let index = 0;
          this.pedidosComprador = data;
          console.log(this.pedidosComprador);
          this.pedidosComprador.forEach((value:PedidosArtesanosInterface) => {
            this.productosComprados.push(value.productos);
            this.pedidosComprados.push(value.pedidos);
            const date = new Date();
            const comprasBody:bodyCompras =
            {
              imagen: this.productosComprados[index].imagen,
              nombreProducto: this.productosComprados[index].nombreP,
              descripcionProducto: this.productosComprados[index].descripcion,
              fechaCompra: this.pedidosComprados[index].fecha_pedido,
              estado: this.pedidosComprados[index].edo_Pedido,
              total: this.pedidosComprados[index].precio_Total_Pedido
            }
            console.log(comprasBody);
            
            this.comprasComprador.push(comprasBody);
            index = index + 1;
            console.log(index);
            
          });
          console.log(this.comprasComprador);
          
        }
      }
    )
}
}
