import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';

@Component({
  selector: 'app-ver-vendedores',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-vendedores.component.html',
  styleUrl: './ver-vendedores.component.css'
})
export class VerVendedoresComponent {

  private router = inject(Router);

  private apiService = inject(ApiService);

  artesanos = Array<ArtesanoInterface>();

  constructor() {
    this.apiService.obtenerArtesanos().subscribe((res) => {
      this.artesanos = res;
    });
  }

  eliminarArtesano(id: number) {
    this.apiService.eliminarArtesano(id).subscribe((res) => {
      this.artesanos = this.artesanos.filter((artesano) => artesano.id_artesano !== id);
    });
  }

  mostrarArtesano(id: number) {
    this.router.navigate(['/vendedorAdmin'], {
      queryParams: {
        art: JSON.stringify(id)
      }
    });
  }
}
