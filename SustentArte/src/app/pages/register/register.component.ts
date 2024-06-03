import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CompradoresInterface } from '../../interfaces/compradores.interface';
import Swal from 'sweetalert2';
import { AlertsService } from '../../services/alerts.service';

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
  alertService = inject(AlertsService);
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
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
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

  crearComprador() {
    console.log(this.formComprador.value);
    
    
    if (this.formComprador.invalid) {
      return console.log("Form rellenado de manera incorrecta");
    }

    if(this.isNew){
      const formComprador = this.formComprador.value as CompradoresInterface;
      this.apiService.crearComprador(formComprador).subscribe(data=>{
        console.log(data)
        this.formComprador.reset();
        this.alertService.alert('Comprador creado', 'success');
        this.route.navigateByUrl('login');
      });
      
    }else{
      this.apiService.editarComprador(this.formComprador.value, this.id).subscribe(data=>{
        console.log(data);
        this.formComprador.reset();
        this.route.navigateByUrl('login')
      })
    }

  }
  
}
