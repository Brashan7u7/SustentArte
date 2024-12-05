import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ArtesanoInterface } from '../../interfaces/artesano.interface';

@Component({
  selector: 'app-vendedores',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule],
  templateUrl: './vendedores.component.html',
  styleUrl: './vendedores.component.css'
})
export class VendedoresComponent {

  private router = inject(Router)

  private apiService = inject(ApiService);

  artesanos = Array<ArtesanoInterface>();

  constructor() {
    this.apiService.obtenerArtesanos().subscribe((res) => {
      this.artesanos = res;
    });
  }

  mostrarVendedor(id: number) 
  {
    this.router.navigate(['/vendedorPublic'],{
      queryParams:{
        vend: JSON.stringify(id)
      }
    });
  }

}
