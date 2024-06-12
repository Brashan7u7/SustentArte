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
import { CrearArtesanoComponent } from './pages/Administrador/crear-artesano/crear-artesano.component';
import { AgregarCategoriaComponent } from './pages/Administrador/agregar-categoria/agregar-categoria.component';
import { AgregarMaterialComponent } from './pages/Administrador/agregar-material/agregar-material.component';
import { VerMaterialesComponent } from './pages/Administrador/ver-materiales/ver-materiales.component';
import { VerCategoriasComponent } from './pages/Administrador/ver-categorias/ver-categorias.component';
import { ProductosPrivadosComponent } from './Compradores/productos-privados/productos-privados.component';
import { CarritoProductosComponent } from './Compradores/carrito-productos/carrito-productos.component';
import { PerfilCompradorComponent } from './Compradores/perfil-comprador/perfil-comprador.component';
import { PagarProductosComponent } from './Compradores/pagar-productos/pagar-productos.component';



export const routes: Routes = [

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////Administrador Routes//////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  {
    path: 'panelAdmin',
    component: PanelAdministradorComponent
  },
    //Artesanos CRUD
  {
    path :'crearArtesano',
    component : CrearArtesanoComponent,
  },
  {
    path:'vendedoresAdmin',
    component: VerVendedoresComponent
  },
  {
    path :'vendedorAdmin',
    component : VerVendedorComponent,
  },
    //Material CRUD
  {
    path :'agregarMaterial',
    component : AgregarMaterialComponent,
  },
  {
    path :'editarMaterial/:id',
    component : AgregarMaterialComponent,
  },
  {
    path :'verMateriales',
    component : VerMaterialesComponent,
    
  },
    //Categoria CRUD
  {
    path :'agregarCategoria',
    component : AgregarCategoriaComponent,
  },
  {
    path :'editarCategoria/:id',
    component : AgregarCategoriaComponent,
  },
  {
    path :'verCategorias',
    component : VerCategoriasComponent,
    
  },


  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////Artesano Routes//////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  {
    path: 'panelVendedor',
    component: PanelVendedorComponent
  },
  {
    path:'addProducto',
    component: AddProductoComponent
  },
  {
    path:'ventasVendedor', 
    component:VerVentasComponent
  },
  {
    path :'misProductosVendedor',
    component : VerProductosComponent,
  },


  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ///////Paginas Publicas Routes///////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
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
    path :'register',
    component : RegisterComponent
  },
  {
    path :'productos',
    component : ProductsComponent,
  },
  {
    path :'productoPublic',
    component : VerProductoPublicoComponent,
  },
  {
    path :'vendedores',
    component : VendedoresComponent
  },
  {
    path :'vendedorPublic',
    component : VerVendedorPublicoComponent,
  },
  {
    path :'productoPrivate',
    component : ProductosPrivadosComponent,
  },
  {
    path:'carritoComprador',
    component:CarritoProductosComponent
  },
  { 
    path:'perfilComprador',
    component:PerfilCompradorComponent
  },
  {
    path:'pagarComprador',
    component:PagarProductosComponent
  },
  
  
  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];
