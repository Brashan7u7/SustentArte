import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PedidoDetalleInterface } from '../../../interfaces/pedidoDetalle.interface';
import { pedidoProductoInterface } from '../../../interfaces/pedidoProductos.interface';
import { PagoInterface } from '../../../interfaces/pago.interface';
import { ProductosArray } from '../../../interfaces/productosArray.interface';
import { pedidoCreateInterface } from '../../../interfaces/pedidosCreate.interface';
import { AlertsService } from '../../../services/alerts.service';
import { CambioStock } from '../../../interfaces/cambio-stock';

@Component({
  selector: 'app-pagar-productos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './pagar-productos.component.html',
  styleUrl: './pagar-productos.component.css'
})
export class PagarProductosComponent {

  formBuilder = inject(FormBuilder);

  private router = inject(Router);

  private alertService = inject(AlertsService);

  formPago !: FormGroup;
  idDetallePedido = 0;

  apiService = inject(ApiService);
  total: number = 0;
  productos: Array<any>[] = [];
  idProducto: number = 0;
  cantidad: number = 0;
  datosStock?: CambioStock;

  constructor() {
    this.cart.forEach(producto => {
      this.total += producto.precio_Venta;
    });

    this.formPago = this.formBuilder.group({
      nombreTitular: ['', Validators.required],
      numTarjeta: ['', Validators.required],
      fechaVencimiento: ['', Validators.required],
      anoVencimiento: ['', Validators.required],
      cvv: ['', Validators.required],
      tipoTarjeta: ['', Validators.required],
    })


  }
  get cart() {
    //console.log(this.apiService.carrito);
    return this.apiService.carrito;
  }
  pagar() {
    const detallePedido = this.formPago.value as PedidoDetalleInterface;
     this.apiService.crearDetallePedido(detallePedido).subscribe((res: PedidoDetalleInterface) => {
      this.idDetallePedido = res.id_detalle || 0;

      const date = new Date();
    const idComprador = Number(sessionStorage.getItem('id_comprador')) || 0;
    const aleatorio = Math.floor(Math.random() * 1000000);
    //console.log("id Detalle Pago",this.idDetallePedido);
    
    const bodyPago: PagoInterface = {
      fecha_pago: date,

      monto_pago: this.total,

      metodo_pago: "tarjeta",

      num_transaccion: "1234567" + aleatorio,

      edo_pago: "pagado",

      detalleId: this.idDetallePedido,

      compradorId: idComprador,
    }

    this.apiService.crearPago(bodyPago).subscribe((res: PagoInterface) => {
      //console.log(res);
      //console.log("Pago Creado");
    });

    const carrito = this.apiService.obtenerCarrito()

    const arrayProductos: Array<ProductosArray> = [];

    for (let i = 0; i < carrito.length; i++) {
      const producto = carrito[i];
      arrayProductos.push({
        id_producto: producto.id_producto
      });
    }

    const bodyPedido: pedidoCreateInterface = {
      fecha_pedido: date,

      numero_Pedido: "2242" + aleatorio + "123" + aleatorio,

      precio_Total_Pedido: this.total,

      edo_Pedido: 0,

      productosA: arrayProductos,

      compradorId: idComprador,
    }

    this.apiService.crearPedido(bodyPedido).subscribe((res) => {
      //console.log(res);
      //console.log("Pedido Creado");
      
    });
      this.cart.forEach(producto => {
        const datosStock: CambioStock = {
          id_producto: producto.id_producto,
          cantidad: 1
        };
        this.apiService.quitarStock(datosStock).subscribe(data => {
          //console.log(data);
          //console.log('Stock Actualizado');
        })
      });

    this.apiService.vaciarCarrito();

    this.alertService.alert('Compra realizada con exito', 'success');
    this.router.navigate(['/productos']);
    });
    
  }
}