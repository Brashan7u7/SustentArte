import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ProductosInterface } from '../../interfaces/producto.interface';
import { CategoriaInterface } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-categoria-filto',
  standalone: true,
  imports: [],
  templateUrl: './categoria-filto.component.html',
  styleUrl: './categoria-filto.component.css'
})
export class CategoriaFiltoComponent {
  private apiService = inject(ApiService);

  productos = Array<ProductosInterface>();

  categorias = Array<CategoriaInterface>();


  constructor() {
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });

    this.apiService.obtenerCategorias().subscribe((res) => {
      this.categorias = res;
    });
  }
}
