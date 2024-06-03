import { Component, inject } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaterialesInterface } from '../../../interfaces/materiales.interface';

@Component({
  selector: 'app-ver-materiales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-materiales.component.html',
  styleUrl: './ver-materiales.component.css'
})
export class VerMaterialesComponent {
  apiService = inject(ApiService);
  router = inject(Router);

  misMateriales : MaterialesInterface[] =[];

  constructor(){
    this.obtenerMateriales();
  }

  obtenerMateriales(){
    this.apiService.obtenerMateriales().subscribe(material => {
      this.misMateriales=material;
    })
  }
  eliminarMaterial(material : MaterialesInterface){
    this.apiService.eliminarMaterial(material).subscribe(material =>{
      console.log(material);
      this.obtenerMateriales();
    });
  }
  
  editarMaterial(material : MaterialesInterface){
    this.router.navigateByUrl('/editarMaterial/'+material.id_material)
  }
}
