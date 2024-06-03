import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { CategoriaInterface } from '../../../interfaces/categoria.interface';

@Component({
  selector: 'app-ver-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-categorias.component.html',
  styleUrl: './ver-categorias.component.css'
})
export class VerCategoriasComponent {
  apiService = inject(ApiService);
  router = inject(Router);

  misCategorias : CategoriaInterface[] =[];

  constructor(){
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.apiService.obtenerCategorias().subscribe(categorias => {
      this.misCategorias=categorias;
    })
  }
  eliminarCategoria(categoria : CategoriaInterface){
    this.apiService.eliminarCategoria(categoria.id_categoria).subscribe(categoria =>{
      console.log(categoria);
      this.obtenerCategorias();
    });
  }
  
}
