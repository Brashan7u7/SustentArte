import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navbarUpdate = new Subject<void>();

  navbarUpdate$ = this.navbarUpdate.asObservable();

  updateNavbar() {
    this.navbarUpdate.next();
  }

}
