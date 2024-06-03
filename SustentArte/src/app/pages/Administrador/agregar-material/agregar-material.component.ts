import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor() {
    this.formMaterial = this.formBuilder.group({
      nombre_material: ['', Validators.required],
      descripcion_material: ['', Validators.required]
    });
    this.activeRoute.params.subscribe((params: any) => {
      console.log(params);
      if (params.id) {
        this.id = params.id;
        this.isNew = false;
        this.apiService.obtenerCategoria(this.id).subscribe((material) => {
          this.formMaterial.reset(material)
        })
      }
    })
  }
  agregarMaterial() {
    console.log(this.formMaterial.value)
    if (this.formMaterial.invalid) {
      return console.log('False');
    }else{
      console.log('Datos invalidos en el formulario')
    }
    if(this.isNew){
      this.apiService.agregarMaterial(this.formMaterial.value).subscribe(data=>{
        console.log(data)
        this.formMaterial.reset();
        this.route.navigateByUrl('verMateriales');
      });
    }
  }
}
