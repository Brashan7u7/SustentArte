import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-materiales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-materiales.component.html',
  styleUrl: './ver-materiales.component.css'
})
export class VerMaterialesComponent {
  materiales: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerMateriales();
  }

  obtenerMateriales(): void {
    this.apiService.obtenerMateriales();
  }
  eliminarMaterial(id: number): void {
    this.apiService.eliminarMaterial(id).subscribe(
      (response: any) => {
        console.log(response);
        // Actualizar la lista de materiales después de eliminar
        this.materiales = this.materiales.filter(material => material.id !== id);
      },
      (error: any) => {
        console.error(error);
        // Manejar el error aquí
      }
    );
  }
}
