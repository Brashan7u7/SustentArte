import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-carrito-productos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carrito-productos.component.html',
  styleUrl: './carrito-productos.component.css'
})
export class CarritoProductosComponent {
  apiService = inject(ApiService);
  total : number=0;
  constructor(){
    this.cart.forEach(producto => {
      this.total += producto.precio_Venta;
    });
  }
  get cart(){
    //console.log(this.apiService.carrito);
    return this.apiService.carrito;
  }

  eliminarCarrito(id : number){
    this.apiService.eliminarProductoCarrito(id);
    this.actualizarTotal();
    return this.apiService.carrito;
  }

  actualizarTotal() {
    this.total = 0;
    this.cart.forEach(producto => {
      this.total += producto.precio_Venta;
    });
  }
  
}
