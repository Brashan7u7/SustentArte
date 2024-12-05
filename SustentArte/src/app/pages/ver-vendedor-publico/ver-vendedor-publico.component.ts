import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ArtesanoInterface } from '../../interfaces/artesano.interface';
import { ProductosInterface } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-vendedor-publico',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-vendedor-publico.component.html',
  styleUrl: './ver-vendedor-publico.component.css'
})
export class VerVendedorPublicoComponent {
  rol:string='';

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private apiService = inject(ApiService);

  productos = Array<ProductosInterface>();

  artesano = <ArtesanoInterface>{};

  private idArtesano: number = 0

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.idArtesano = JSON.parse(params['vend']);
      this.apiService.obtenerArtesano(this.idArtesano).subscribe((res) => {
        this.artesano = res;
      });

      this.apiService.obtenerProductosxArtesano(this.idArtesano).subscribe((res) => {
        this.productos = res;
      });
    })
    
    
  }

  mostrarProducto(id: number) {
    this.router.navigate(['/productoPublic'], { queryParams: { prod: id} });
  }

}
