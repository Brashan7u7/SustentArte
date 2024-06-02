import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  alert(msn: string, icon:'error' | 'info' | 'question' | 'success' | 'warning'){
      Swal.fire({
        text:msn,
        icon,

        toast:true,
        position:'top-end',
        showConfirmButton:false,
        timer:1500,
      })
  }
}
