import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';
import { ProductosInterface } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-vendedor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-vendedor.component.html',
  styleUrl: './ver-vendedor.component.css'
})
export class VerVendedorComponent {
  router = inject(Router);

  private route = inject(ActivatedRoute)

  private apiService = inject(ApiService);

  artesanos = <ArtesanoInterface>{};

  productos = Array<ProductosInterface>();

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.apiService.obtenerArtesano(params['art']).subscribe((res) => {
        this.artesanos = res;
      });

      this.apiService.obtenerProductosxArtesano(params['art']).subscribe((res) => {
        this.productos = res;
      });
    });
  }


  eliminarProducto(id: number) {
    this.apiService.eliminarProducto(id).subscribe((res) => {
      this.productos = this.productos.filter((producto) => producto.id_producto !== id);
    });
  }
  editarArtesano(artesano: ArtesanoInterface) {
    this.router.navigateByUrl('editarArtesano/'+artesano.id_artesano)
  }
}
