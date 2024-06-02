import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isNew = true;
  id = 0;
  fb = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute);
  apiService = inject(ApiService);
  route = inject(Router);
  formComprador!: FormGroup;
  constructor(){
    this.formComprador = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      ciudad: ['', Validators.required],
      estado: ['', Validators.required],
      cp: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      calle: ['', Validators.required],
      colonia: ['', Validators.required],
      numCasa: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  registarComprador(){
    console.log(this.formComprador.value);
    this.apiService.crearComprador(this.formComprador.value);
  }
  
}
