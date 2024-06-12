import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';
import { ProductosInterface } from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-productos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-productos.component.html',
  styleUrl: './ver-productos.component.css'
})
export class VerProductosComponent {
  apiService = inject(ApiService);
  idArtesano:number;
  artesano = <ArtesanoInterface>{};
  productos = Array<ProductosInterface>();

  constructor(){
    this.idArtesano = Number(sessionStorage.getItem('id_artesano'));
    console.log(this.idArtesano);
    
    this.apiService.obtenerArtesano(this.idArtesano).subscribe((res) => {
      this.artesano = res;
    });
    this.apiService.obtenerProductosxArtesano(this.idArtesano).subscribe((res) => {
      this.productos = res;
    });
  }

}
