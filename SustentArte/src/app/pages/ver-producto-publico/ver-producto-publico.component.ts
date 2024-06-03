import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ProductosInterface } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-ver-producto-publico',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './ver-producto-publico.component.html',
  styleUrl: './ver-producto-publico.component.css'
})
export class VerProductoPublicoComponent {

  private apiService = inject(ApiService);

  private router = inject(ActivatedRoute);

  private idPorducto: number = 0

  producto = <ProductosInterface>{};

  constructor() { 
    this.router.queryParams.subscribe((params) => {
      this.idPorducto = JSON.parse(params['prod']);
      this.apiService.obtenerProducto(this.idPorducto).subscribe((res) => {
        this.producto = res;
      });
    })
  }

}
