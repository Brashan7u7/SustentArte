import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ProductosInterface } from '../../interfaces/producto.interface';
import { CategoriaInterface } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  private router = inject(Router)

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


  filtrarCategoria(categoria: string) {
    this.productos = [];
    this.apiService.obtenerProductosxCategorias(categoria).subscribe((res) => {
      this.productos = res;
    });
  }

  mostrarProducto(nameProduct: string) 
  {
    this.router.navigate(['/productoPublic'],{
      queryParams:{
        prod: JSON.stringify(nameProduct)
      }
    });
  }

}
