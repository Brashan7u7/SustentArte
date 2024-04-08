import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';


export const routes: Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path :'nosotros',
    component : NosotrosComponent
  },
  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];
