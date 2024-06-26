import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-panel-administrador',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './panel-administrador.component.html',
  styleUrl: './panel-administrador.component.css'
})
export class PanelAdministradorComponent {

  rol: string = '';

  constructor(private navbarService: NavbarService, private cd: ChangeDetectorRef) {
    this.rol = sessionStorage.getItem('rol') || '';
    this.navbarService.navbarUpdate$.subscribe(() => {
      this.rol = sessionStorage.getItem('rol') || '';
      this.cd.detectChanges();
    });
    this.navbarService.updateNavbar();
  }

}
