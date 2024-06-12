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
import { ProductosPrivadosComponent } from './pages/Compradores/productos-privados/productos-privados.component';
import { CarritoProductosComponent } from './pages/Compradores/carrito-productos/carrito-productos.component';
import { PerfilCompradorComponent } from './pages/Compradores/perfil-comprador/perfil-comprador.component';
import { PagarProductosComponent } from './pages/Compradores/pagar-productos/pagar-productos.component';
import { ProductosCompradosComponent } from './pages/Compradores/productos-comprados/productos-comprados.component';
import { ProductoPrivadoComponent } from './pages/Compradores/producto-privado/producto-privado.component';
import { EditarCompradorComponent } from './pages/Compradores/editar-comprador/editar-comprador.component';
import { AuthGuard } from './guards/auth.guard';



export const routes: Routes = [

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  ////////////Administrador Routes//////////////////
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  {
    path: 'panelAdmin',
    component: PanelAdministradorComponent,
    canActivate:[AuthGuard]
  },
    //Artesanos CRUD
  {
    path :'crearArtesano',
    component : CrearArtesanoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'vendedoresAdmin',
    component: VerVendedoresComponent,
    canActivate:[AuthGuard]
  },
  {
    path :'vendedorAdmin',
    component : VerVendedorComponent,
    canActivate:[AuthGuard]
  },
    //Material CRUD
  {
    path :'agregarMaterial',
    component : AgregarMaterialComponent,
    canActivate:[AuthGuard]
  },
  {
    path :'editarMaterial/:id',
    component : AgregarMaterialComponent,
    canActivate:[AuthGuard]
  },
  {
    path :'verMateriales',
    component : VerMaterialesComponent,
    canActivate:[AuthGuard]
    
  },
    //Categoria CRUD
  {
    path :'agregarCategoria',
    component : AgregarCategoriaComponent,
    canActivate:[AuthGuard]
  },
  {
    path :'editarCategoria/:id',
    component : AgregarCategoriaComponent,
    canActivate:[AuthGuard]
  },
  {
    path :'verCategorias',
    component : VerCategoriasComponent,
    canActivate:[AuthGuard]
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
    path:'oneProduct',
    component:ProductoPrivadoComponent
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
    path:'editarComprador',
    component:EditarCompradorComponent
  },
  {
    path:'pagarComprador',
    component:PagarProductosComponent
  },
  {
    path:'productosComprados',
    component:ProductosCompradosComponent
  },
  
  
  {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
  }
];
