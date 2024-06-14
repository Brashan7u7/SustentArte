import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CompradoresInterface } from '../../../interfaces/compradores.interface';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-editar-comprador',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule,RouterLink],
  templateUrl: './editar-comprador.component.html',
  styleUrl: './editar-comprador.component.css'
})
export class EditarCompradorComponent {

  private apiService = inject (ApiService);
  formBuilder = inject (FormBuilder);
  comprador = <CompradoresInterface>{};
  formEditarComprador !: FormGroup;
  alertService = inject(AlertsService);

  private router = inject(Router);

  constructor(){

    this.apiService.obtenerComprador(sessionStorage.getItem('id_comprador') || '').subscribe((res) => {
      this.comprador = res;
      this.formEditarComprador = this.formBuilder.group({
        correo :[''+this.comprador.correo],
        password :[''+this.comprador.password],
        nombre :[''+this.comprador.nombre],
        apellidoPaterno :[''+this.comprador.apellidoPaterno],
        apellidoMaterno :[''+this.comprador.apellidoMaterno],
        telefono :[''+this.comprador.telefono],
        ciudad :[''+this.comprador.ciudad],
        estado :[''+this.comprador.estado],
        cp :[''+this.comprador.cp],
        calle :[''+this.comprador.calle],
        colonia :[''+this.comprador.colonia],
        numCasa :[''+this.comprador.numCasa],
      })
    });
  }

  editarComprar()
  {
    const bodyComprador = this.formEditarComprador.value as CompradoresInterface;
    const idComprador = Number(sessionStorage.getItem('id_comprador')) || 0;
    this.apiService.editarComprador(bodyComprador,idComprador).subscribe((res) => {
      console.log(res);
    });
    this.alertService.alert('Usuario Actualizado', 'info');
    this.router.navigate(['/perfilComprador'])
  }
}
