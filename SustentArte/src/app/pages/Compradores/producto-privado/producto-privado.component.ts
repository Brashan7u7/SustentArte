import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ProductosInterface } from '../../../interfaces/producto.interface';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-producto-privado',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './producto-privado.component.html',
  styleUrl: './producto-privado.component.css'
})
export class ProductoPrivadoComponent {

  private apiService = inject(ApiService);

  private router = inject(ActivatedRoute);

  private routerR = inject(Router)

  private alertService = inject(AlertsService)

  carritoButom = false

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

  agregarCarrito(id: number) {
    this.apiService.agregarCarrito(id);
    this.carritoButom = true
    setTimeout(() => {
      this.carritoButom = false
    }, 2000);
    this.alertService.alert('Agregado a carrito', 'info');
    console.log(this.apiService.obtenerCarrito());
    this.routerR.navigate(['/carritoComprador'],{ queryParams: { prod: JSON.stringify(id) }});
  }

}
