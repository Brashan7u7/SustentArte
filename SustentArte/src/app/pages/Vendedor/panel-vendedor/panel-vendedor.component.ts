import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarService } from '../../../services/navbar.service';

@Component({
  selector: 'app-panel-vendedor',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './panel-vendedor.component.html',
  styleUrl: './panel-vendedor.component.css'
})
export class PanelVendedorComponent {
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
