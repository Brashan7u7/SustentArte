import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule], // Only CommonModule is needed
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {
  productoForm!: FormGroup;
  categorias: string[] = [];

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      urlImagen: ['', [Validators.required, Validators.pattern('https?://.+')]]
    });

    /*this.apiService.obtenerCategorias().subscribe(
      (data: string[]) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error obteniendo categories', error);
      }
    );*/
  }

  agregarProducto(): void {
    if (this.productoForm.valid) {
      console.log(this.productoForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
