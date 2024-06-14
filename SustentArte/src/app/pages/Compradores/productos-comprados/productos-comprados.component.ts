import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PedidosInterface } from '../../../interfaces/pedidos.interface';
import { ApiService } from '../../../services/api.service';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { pedidoProductoInterface } from '../../../interfaces/pedidoProductos.interface';

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

  pedidosComprador = Array<PedidosInterface>();

  productosComprador = Array<pedidoProductoInterface>();

  constructor() {

    this.idComprador = sessionStorage.getItem('id_comprador')||"";
    console.log(this.idComprador);
    
    this.apiService.pedidosComprador(this.idComprador).subscribe((res:PedidosInterface[]) => {
      this.pedidosComprador = res;
      console.log(this.pedidosComprador);


      this.pedidosComprador.forEach((pedido:PedidosInterface) => {
        
        pedido.productos.forEach((productos:ProductosInterface) => {
          this.productosComprador.push({
            id_producto: productos.id_producto,
            nombreP:productos.nombreP,
            descripcion:productos.descripcion,
            imagen:productos.imagen,
            precio_Venta:productos.precio_Venta,
            stock:productos.stock,
            historia:productos.historia,
            artesano:productos.artesano,
            materiales:productos.materiales,
            categoria:productos.categoria,
            cantidad:pedido.precio_Total_Pedido,
            estado:pedido.edo_Pedido,
            fecha_entrega:pedido.fecha_pedido,
          });
        });
      });
      
      console.log(this.productosComprador);
      
  });
}
}
