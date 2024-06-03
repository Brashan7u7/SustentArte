import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-material',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-material.component.html',
  styleUrl: './agregar-material.component.css'
})
export class AgregarMaterialComponent {
  formBuilder = inject(FormBuilder);
  formMaterial !: FormGroup;
  route = inject(Router);
  apiService = inject(ApiService);
  constructor() {
    this.formMaterial = this.formBuilder.group({
      nombre_Mat: ['', Validators.required],
      desc_Mat: ['', Validators.required]
    });
  }
  agregarMaterial() {
    console.log(this.formMaterial.value)
    if (this.formMaterial.valid) {
      this.apiService.agregarMaterial(this.formMaterial.value);
    }else{
      console.log('Datos invalidos en el formulario')
    }
  }
}
