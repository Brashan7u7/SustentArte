import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.css']
})
export class VerProductosComponent {
  apiService = inject(ApiService);
  router = inject(Router);
  idArtesano: number;
  artesano = <ArtesanoInterface>{};
  productos = Array<ProductosInterface>();

  constructor() {
    this.idArtesano = Number(sessionStorage.getItem('id_artesano'));
    console.log(this.idArtesano);

    this.apiService.obtenerArtesano(this.idArtesano).subscribe((res) => {
      this.artesano = res;
    });
    this.apiService.obtenerProductosxArtesano(this.idArtesano).subscribe((res) => {
      this.productos = res;
    });
  }

  obtenerProductos() {
    this.apiService.obtenerProductosxArtesano(this.idArtesano).subscribe((res) => {
      this.productos = res;
    });
  }

  editarProducto(producto: ProductosInterface) {
    this.router.navigateByUrl('/editProduct/' + producto.id_producto);
  }

  eliminarProducto(product: ProductosInterface) {
    this.apiService.eliminarProducto(product.id_producto).subscribe(() => {
      console.log('Producto eliminado');
      this.obtenerProductos();
    });
  }
}
