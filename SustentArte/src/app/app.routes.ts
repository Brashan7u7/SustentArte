import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PanelAdministradorComponent } from './pages/Administrador/panel-administrador/panel-administrador.component';
import { PanelVendedorComponent } from './pages/Vendedor/panel-vendedor/panel-vendedor.component';
import { AddProductoComponent } from './pages/Vendedor/add-producto/add-producto.component';
import { ProductsComponent } from './pages/products/products.component';
import { VendedoresComponent } from './pages/vendedores/vendedores.component';
import { VerVendedoresComponent } from './pages/Administrador/ver-vendedores/ver-vendedores.component';
import { VerProductosComponent } from './pages/Vendedor/ver-productos/ver-productos.component';
import { VerVentasComponent } from './pages/Vendedor/ver-ventas/ver-ventas.component';
import { VerVendedorComponent } from './pages/Administrador/ver-vendedor/ver-vendedor.component';
import { VerVendedorPublicoComponent } from './pages/ver-vendedor-publico/ver-vendedor-publico.component';
import { VerProductoPublicoComponent } from './pages/ver-producto-publico/ver-producto-publico.component';



export const routes: Routes = [
  {
    path :'productoPublic/:id',
    component : VerProductoPublicoComponent,
    
  },
  {
    path :'vendedorPublic/:id',
    component : VerVendedorPublicoComponent,
    
  },
  {
    path :'vendedorAdmin/:id',
    component : VerVendedorComponent,
    
  },
  {
    path :'misProductosVendedor',
    component : VerProductosComponent,
    
  },
  {
    path :'productos',
    component : ProductsComponent,
    
  },
  {
    path :'vendedores',
    component : VendedoresComponent
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
    path:'vendedoresAdmin',
    component: VerVendedoresComponent
  },
  {
    path:'ventasVendedor', 
    component:VerVentasComponent
  },
  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];
