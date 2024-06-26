import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlertsService } from '../../../services/alerts.service';


@Component({
  selector: 'app-agregar-material',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-material.component.html',
  styleUrl: './agregar-material.component.css'
})
export class AgregarMaterialComponent {
  isNew=true;
  id=0;
  activeRoute = inject(ActivatedRoute) 
  formBuilder = inject(FormBuilder);
  formMaterial !: FormGroup;
  route = inject(Router);
  apiService = inject(ApiService);
  alertService = inject(AlertsService);

  constructor() {
    this.formMaterial = this.formBuilder.group({
      nombre_material: ['', Validators.required],
      descripcion_material: ['', Validators.required]
    });
    this.activeRoute.params.subscribe((params: any) => {
      //console.log(params);
      if (params.id) {
        this.id = params.id;
        this.isNew = false;
        this.apiService.obtenerMaterial(this.id).subscribe((material) => {
          this.formMaterial.reset(material)
        })
      }
    })
  }

  async showConfirmationAlert(title: string, text: string): Promise<boolean> {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    });
    return result.isConfirmed;
  }

  agregarMaterial() {
    //console.log(this.formMaterial.value)
    if (this.formMaterial.invalid) {
      return //console.log('Datos invalidos en el formulario')
    }
    if(this.isNew){
      this.apiService.agregarMaterial(this.formMaterial.value).subscribe(data=>{
        //console.log(data)
        this.formMaterial.reset();
        this.alertService.alert('Artesano creado', 'success');
        this.route.navigateByUrl('verMateriales');
      });
    }else{
      this.apiService.editarMaterial(this.formMaterial.value,this.id).subscribe(data=>{
        //console.log(data);
        this.formMaterial.reset();
        this.route.navigateByUrl('verMateriales')
        
      })
    }
  }
}
