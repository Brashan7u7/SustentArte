import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PanelAdministradorComponent } from './pages/Administrador/panel-administrador/panel-administrador.component';
import { PanelVendedorComponent } from './pages/Vendedor/panel-vendedor/panel-vendedor.component';
import { AddProductoComponent } from './pages/Vendedor/add-producto/add-producto.component';
import { ProductsComponent } from './pages/products/products.component';



export const routes: Routes = [
  {
    path :'productos',
    component : ProductsComponent,
    
  },
  {
    path :'register',
    component : RegisterComponent
  },
  {
    path:'addProducto',
    component: AddProductoComponent
  },
  {
    path: 'panelAdmin',
    component: PanelAdministradorComponent
  },
  {
    path: 'panelVendedor',
    component: PanelVendedorComponent
  },
  {
    path :'home',
    component : HomeComponent
  },
  {
    path :'nosotros',
    component : NosotrosComponent
  },
  {
    path :'login',
    component : LoginComponent
  },

  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];
