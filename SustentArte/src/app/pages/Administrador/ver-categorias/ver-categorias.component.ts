import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-ver-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-categorias.component.html',
  styleUrl: './ver-categorias.component.css'
})
export class VerCategoriasComponent {
  categorias: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  obtenerCategorias(): void {
    this.apiService.obtenerCategorias().subscribe(
      (data: any[]) => {
        this.categorias = data;
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
  }
}
