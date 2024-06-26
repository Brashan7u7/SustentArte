import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AlertsService } from '../../../services/alerts.service';
import { SeguimientoInterface } from '../../../interfaces/seguimiento.interface';
import { updateSeguimientoInterface } from '../../../interfaces/updateSeguimiento.interface';

@Component({
  selector: 'app-actualizar-envio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './actualizar-envio.component.html',
  styleUrl: './actualizar-envio.component.css'
})
export class ActualizarEnvioComponent {
  formBuilder = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute);
  formSeguimiento !: FormGroup;
  router = inject(Router);
  idPedido = this.activeRoute.snapshot.queryParams['ped'];

  private apiService = inject(ApiService);
  private alertService = inject(AlertsService);

  constructor() {
    this.formSeguimiento = this.formBuilder.group({
      num_Guia: [''],
      empresa_Transporte: ['']
    });
  }


  actualizarSeguimiento(id:number) {
    const seguimiento = this.formSeguimiento.value as updateSeguimientoInterface;
    seguimiento.id_pedido = Number(this.idPedido);
    this.apiService.updateSeguimiento(id, seguimiento).subscribe((resp)=>
    {
      this.alertService.alert('Seguimiento actualizado', 'success');
      this.router.navigateByUrl('/ventasVendedor');
    })
  }
}
