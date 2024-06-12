import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';
import { CategoriaInterface } from '../../../interfaces/categoria.interface';
import Swal from 'sweetalert2';
import { AlertsService } from '../../../services/alerts.service';
import { timestamp } from 'rxjs';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-productos-privados',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './productos-privados.component.html',
  styleUrl: './productos-privados.component.css'
})
export class ProductosPrivadosComponent {
  rol: string = '';

  private router = inject(Router)

  private routerM = inject(ActivatedRoute)

  private apiService = inject(ApiService);

  private alertService = inject(AlertsService)

  carritoButom = false

  productos = Array<ProductosInterface>();

  categorias = Array<CategoriaInterface>();


  constructor(private navbarService: NavbarService, private cd: ChangeDetectorRef) {
    this.apiService.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });

    this.apiService.obtenerCategorias().subscribe((res) => {
      this.categorias = res;
    });

    console.log(this.apiService.obtenerCarrito());
    this.rol = sessionStorage.getItem('rol') || '';
    this.navbarService.navbarUpdate$.subscribe(() => {
      this.rol = sessionStorage.getItem('rol') || '';
      this.cd.detectChanges();
    });
    this.navbarService.updateNavbar();
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
    this.router.navigate(['/oneProduct'],{
      queryParams:{
        prod: JSON.stringify(id)
      }
    });
  }
}
/*


  constructor() {
    
  }
*/