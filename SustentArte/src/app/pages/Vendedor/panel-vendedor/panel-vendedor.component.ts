import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarService } from '../../../services/navbar.service';
import { ApiService } from '../../../services/api.service';
import { ArtesanoInterface } from '../../../interfaces/artesano.interface';

@Component({
  selector: 'app-panel-vendedor',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './panel-vendedor.component.html',
  styleUrl: './panel-vendedor.component.css'
})
export class PanelVendedorComponent {
  rol: string = '';
  apiService=inject(ApiService);
  id?:number;
  artesano?:ArtesanoInterface;

  constructor(private navbarService: NavbarService, private cd: ChangeDetectorRef) {
    this.rol = sessionStorage.getItem('rol') || '';
    this.navbarService.navbarUpdate$.subscribe(() => {
      this.rol = sessionStorage.getItem('rol') || '';
      this.cd.detectChanges();
    });
    this.navbarService.updateNavbar();
    this.apiService.obtenerArtesano(Number(sessionStorage.getItem('id_artesano'))).subscribe(artesano=>{
      this.artesano=artesano;
    })
  }



}
