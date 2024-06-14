import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Importamos FormsModule para usar ngModel
import { ProductosInterface } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-carrito-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],  // Añadimos FormsModule a las importaciones
  templateUrl: './carrito-productos.component.html',
  styleUrls: ['./carrito-productos.component.css']
})
export class CarritoProductosComponent {
  apiService = inject(ApiService);
  total: number = 0;

  constructor() {
    // Inicializamos la cantidad de cada producto en el carrito a 1 si no está definida
    this.cart.forEach((producto:any) => {
      if (!producto.cantidad) {
        producto.cantidad = 1;
      }
    });
    this.actualizarTotal();
  }

  get cart() {
    return this.apiService.carrito;
  }

  eliminarCarrito(id: number) {
    this.apiService.eliminarProductoCarrito(id);
    this.actualizarTotal();
  }

  actualizarTotal() {
    this.total = 0;
    this.cart.forEach((producto:any) => {
      this.total += producto.precio_Venta * (producto.cantidad || 1);
    });
  }

  actualizarCantidad(producto: any) {
    // Si la cantidad es mayor que el stock, se ajusta al stock
    if (producto.cantidad > producto.stock) {
      producto.cantidad = producto.stock;
    }
    // Si la cantidad es menor que 1, se ajusta a 1
    if (producto.cantidad < 1) {
      producto.cantidad = 1;
    }
    this.actualizarTotal();
  }
}
