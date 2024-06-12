import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-carrito-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito-productos.component.html',
  styleUrl: './carrito-productos.component.css'
})
export class CarritoProductosComponent {
  apiService = inject(ApiService);
  total : number=0;
  get cart(){
    console.log(this.apiService.carrito);
    return this.apiService.carrito;
  }
  constructor(){
    this.cart.forEach(producto => {
      this.total += producto.precio_Venta;
    });
  }
}
