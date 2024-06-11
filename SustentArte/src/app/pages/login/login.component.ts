import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AlertsService } from '../../services/alerts.service';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formBuilder = inject (FormBuilder);
  formLogin !: FormGroup;
  route = inject(Router);
  alertService = inject(AlertsService);
  apiService = inject(ApiService);


  constructor(){
    this.formLogin = this.formBuilder.group({
      email :['', Validators.required],
      password :['', Validators.required]
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



  onlogin() {
    if (this.formLogin.invalid) {
      this.alertService.alert('Por favor complete todos los campos', 'error');
      return;
    }

    console.log(this.formLogin.value);
    this.apiService.loginAdmin(this.formLogin.value).subscribe((data: any) => {
        console.log(data);
        if (data.rol === 'admin') {
          console.log();
          this.formLogin.reset();
          this.alertService.alert('Bienvenido Administrador', 'info');
          this.route.navigateByUrl('panelAdmin');
        } else if(data.rol === 'artesano') {
          this.formLogin.reset();
          this.alertService.alert('Bienvenido Artesano', 'info');
          sessionStorage.setItem('id_artesano', data.artesanoFind.id_artesano);
          this.route.navigateByUrl('panelVendedor');
        }
      },
      error => {
        this.alertService.alert('Error en el inicio de sesión', 'error');
        console.error(error);
      }
    );
  }
}
