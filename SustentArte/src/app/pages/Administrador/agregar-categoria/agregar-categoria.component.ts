import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { AlertsService } from '../../../services/alerts.service';
import Swal from 'sweetalert2';
import { CategoriaInterface } from '../../../interfaces/categoria.interface';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-categoria.component.html',
  styleUrl: './agregar-categoria.component.css'
})
export class AgregarCategoriaComponent {
  isNew = true;
  id = 0;
  formBuilder = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute);
  formCategoria !: FormGroup;
  route = inject(Router);
  apiService = inject(ApiService);
  alertService = inject(AlertsService);

  constructor() {
    this.formCategoria = this.formBuilder.group({
      nombre_categoria: ['', Validators.required]
    });
    this.activeRoute.params.subscribe((params: any) => {
      //console.log(params);
      if (params.id) {
        this.id = params.id;
        this.isNew = false;
        this.apiService.obtenerCategoria(this.id).subscribe((categoria) => {
          this.formCategoria.reset(categoria)
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


  agregarCategoria() {
    //console.log(this.formCategoria.value);
    
    
    if (this.formCategoria.invalid) {
      return //console.log("Form rellenado de manera incorrecta");
    }

    if(this.isNew){
      const formCategory = this.formCategoria.value as CategoriaInterface;
      this.apiService.agregarCategoria(formCategory).subscribe(data=>{
        //console.log(data)
        this.formCategoria.reset();
        this.alertService.alert('Categoria creada', 'success');
        this.route.navigateByUrl('verCategorias');
      });

    }else{
      this.apiService.editarCategoria(this.formCategoria.value, this.id).subscribe(data=>{
        //console.log(data);
        this.formCategoria.reset();
        this.alertService.alert('Categoria editada', 'success');
        this.route.navigateByUrl('verCategorias')
      })
    }

  }
}
