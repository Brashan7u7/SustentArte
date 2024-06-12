import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { CategoriaInterface } from '../../../interfaces/categoria.interface';
import Swal from 'sweetalert2';
import { AlertsService } from '../../../services/alerts.service';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-productos-privados',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './productos-privados.component.html',
  styleUrl: './productos-privados.component.css'
})
export class ProductosPrivadosComponent {

  private router = inject(Router)

  private apiService = inject(ApiService);

  private alertService = inject(AlertsService)

  carritoButom = false

  productos = Array<ProductosInterface>();

  categorias = Array<CategoriaInterface>();


  constructor() {
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });

    this.apiService.obtenerCategorias().subscribe((res) => {
      this.categorias = res;
    });

    console.log(this.apiService.obtenerCarrito());
    
  }

  agregarCarrito(id: number) {
    this.apiService.agregarCarrito(id);
    this.carritoButom = true
    setTimeout(() => {
      this.carritoButom = false
    }, 2000);
    this.alertService.alert('Agregado a carrito', 'info');
    console.log(this.apiService.obtenerCarrito());
  }

  filtrarCategoria(categoria: string) {
    this.productos = [];
    this.apiService.obtenerProductosxCategorias(categoria).subscribe((res) => {
      this.productos = res;
    });
  }

  mostrarProducto(id: number) 
  {
    this.router.navigate(['/productoPublic'],{
      queryParams:{
        prod: JSON.stringify(id)
      }
    });
  }
}
