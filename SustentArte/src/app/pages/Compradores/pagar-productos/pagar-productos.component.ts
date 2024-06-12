import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagar-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagar-productos.component.html',
  styleUrl: './pagar-productos.component.css'
})
export class PagarProductosComponent {
  apiService = inject(ApiService);
  total : number=0;

  constructor(){
    this.cart.forEach(producto => {
      this.total += producto.precio_Venta;
    });
  }
  get cart(){
    console.log(this.apiService.carrito);
    return this.apiService.carrito;
  }
}
