import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterModule, Router, ActivatedRoute } from '@angular/router';
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

   private activatedRoute = inject(ActivatedRoute)

  private apiService = inject(ApiService);

  private alertService = inject(AlertsService)

  productos = Array<ProductosInterface>();

  categorias = Array<CategoriaInterface>();
  carritoButom = false


  constructor() {

    this.categorias = this.activatedRoute.snapshot.data['categorias'];
    this.productos = this.activatedRoute.snapshot.data['products'];
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      
      if (data['products'] && data['categorias']) {
        this.categorias = data['categorias'];
        this.productos = data['products'];
      }
    });
    /*
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });

    this.apiService.obtenerCategorias().subscribe((res) => {
      this.categorias = res;
    });
    */
  }


  filtrarCategoria(categoria: string) {
    this.router.navigate(['/productos'], {
      queryParams: { filter: categoria },
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

  verTodo(){
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });
    this.activo=true;
  }

}
