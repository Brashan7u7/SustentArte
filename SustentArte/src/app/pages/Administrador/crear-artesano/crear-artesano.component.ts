import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from '../../../services/alerts.service';
import { ApiService } from '../../../services/api.service';
import Swal from 'sweetalert2';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';

@Component({
  selector: 'app-crear-artesano',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-artesano.component.html',
  styleUrls: ['./crear-artesano.component.css']
})
export class CrearArtesanoComponent {

  isNew = true;
  id = 0;
  formBuilder = inject(FormBuilder);
  formArtesano !: FormGroup;
  route = inject(Router);
  alertService = inject(AlertsService);
  apiService = inject(ApiService);

  constructor(){
    this.formArtesano = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      descripcionTrabajo: ['', Validators.required],
      xp_textil: ['', Validators.required],
      tec_artesanales: ['', Validators.required],
      reconocimientos: ['', Validators.required],
      foto: ['', Validators.required],
      localidad: ['', Validators.required]
    });
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


  crearArtesano() {
    console.log(this.formArtesano.value);
    
    
    if (this.formArtesano.invalid) {
      return console.log("Form rellenado de manera incorrecta");
    }

    if(this.isNew){
      const formArtesano = this.formArtesano.value as ArtesanoInterface;
      this.apiService.crearArtesano(formArtesano).subscribe(data=>{
        console.log(data)
        this.formArtesano.reset();
        this.alertService.alert('Artesano creado', 'success');
        this.route.navigateByUrl('vendedoresAdmin');
      });
      
    }else{
      this.apiService.ediyarArtesano(this.formArtesano.value, this.id).subscribe(data=>{
        console.log(data);
        this.formArtesano.reset();
        this.route.navigateByUrl('vendedoresAdmin')
      })
    }

  }
}
