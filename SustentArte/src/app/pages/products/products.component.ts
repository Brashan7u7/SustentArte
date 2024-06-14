import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { ProductosInterface } from '../../interfaces/producto.interface';
import { CategoriaInterface } from '../../interfaces/categoria.interface';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  activo:boolean=true;

  private router = inject(Router)

  private apiService = inject(ApiService);

  private alertService = inject(AlertsService)

  productos = Array<ProductosInterface>();

  categorias = Array<CategoriaInterface>();
  carritoButom = false


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
    this.activo=false;
  }

  mostrarProducto(id: number) 
  {
    this.router.navigate(['/productoPublic'],{
      queryParams:{
        prod: JSON.stringify(id)
      }
    });
  }

  verTodo(){
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });
    this.activo=true;
  }

}
