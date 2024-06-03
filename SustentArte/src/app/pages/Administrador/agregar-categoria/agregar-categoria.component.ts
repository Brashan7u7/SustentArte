import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css'
})
export class AgregarCategoriaComponent {

  formBuilder = inject(FormBuilder);
  formCategoria !: FormGroup;
  route = inject(Router);
  apiService = inject(ApiService);

  constructor(){
    this.formCategoria = this.formBuilder.group({
      nombreCat: ['', Validators.required],
      matCategoria: ['', Validators.required]
    });
  }


  agregarCategoria(){
    console.log(this.formCategoria.value);
    
    if (this.formCategoria.valid) {
      this.apiService.agregarCategoria(this.formCategoria.value)
    }
  }
}
