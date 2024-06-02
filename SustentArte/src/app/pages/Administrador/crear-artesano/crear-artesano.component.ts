import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from '../../../services/alerts.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-crear-artesano',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-artesano.component.html',
  styleUrls: ['./crear-artesano.component.css']
})
export class CrearArtesanoComponent {

  formBuilder = inject(FormBuilder);
  formArtesano !: FormGroup;
  route = inject(Router);
  alertService = inject(AlertsService);
  apiService = inject(ApiService);

  constructor(){
    this.formArtesano = this.formBuilder.group({
      nombre: ['', Validators.required],
      apPat: ['', Validators.required],
      apMat: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      descripcion_Trabajo: ['', Validators.required],
      xp_Textil: ['', Validators.required],
      tec_Artesanales: ['', Validators.required],
      reconocimientos: ['', Validators.required],
      foto: ['', Validators.required],
    });
  }

  crearArtesano(){
    console.log(this.formArtesano.value)
    this.apiService.crearArtesano(this.formArtesano.value);
  }
}
