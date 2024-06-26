import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  rol: string = '';

  constructor(private navbarService: NavbarService, private cd: ChangeDetectorRef) {
    this.rol = sessionStorage.getItem('rol') || '';
    this.navbarService.navbarUpdate$.subscribe(() => {
      this.rol = sessionStorage.getItem('rol') || '';
      this.cd.detectChanges();
    });
  }

  clearSessionStorage() {
    sessionStorage.clear();
    this.navbarService.updateNavbar();
  }
}
