import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ProductosInterface } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  private apiService = inject(ApiService);

  productos = Array<ProductosInterface>();


  constructor() {
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });
  }


}
