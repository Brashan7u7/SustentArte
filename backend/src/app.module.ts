/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './servicios/productos/productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosController } from './usuarios/usuarios.controller';
import { SubcategoriasController } from './subcategorias/subcategorias.controller';
import { SeguimientosController } from './seguimientos/seguimientos.controller';
import { ProductosController } from './productos/productos.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { PagosController } from './pagos/pagos.controller';
import { MaterialesController } from './materiales/materiales.controller';
import { CompradoresController } from './compradores/compradores.controller';
import { CategoriasController } from './categorias/categorias.controller';
import { ArtesanosController } from './artesanos/artesanos.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { SubcategoriasService } from './subcategorias/subcategorias.service';
import { SeguimientosService } from './seguimientos/seguimientos.service';
import { ProductosService } from './productos/productos.service';
import { PedidosService } from './pedidos/pedidos.service';
import { PagosService } from './pagos/pagos.service';
import { MaterialesService } from './materiales/materiales.service';
import { CompradoresService } from './compradores/compradores.service';
import { CategoriasService } from './categorias/categorias.service';
import { ArtesanosService } from './artesanos/artesanos.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SubcategoriaModule } from './subcategoria/subcategoria.module';
import { SubcategoriasModule } from './subcategorias/subcategorias.module';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';
import { MaterialesModule } from './materiales/materiales.module';
import { CompradoresModule } from './compradores/compradores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ArtesanosModule } from './artesanos/artesanos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin1234@cluster0.1l0vbnb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsuariosModule,
    SubcategoriaModule,
    SubcategoriasModule,
    SeguimientosModule,
    ProductosModule,
    PedidosModule,
    PagosModule,
    MaterialesModule,
    CompradoresModule,
    CategoriasModule,
    ArtesanosModule,
  ],
  controllers: [AppController, UsuariosController, SubcategoriasController, SeguimientosController, ProductosController, PedidosController, PagosController, MaterialesController, CompradoresController, CategoriasController, ArtesanosController],
  providers: [AppService, ProductosService, UsuariosService, SubcategoriasService, SeguimientosService, PedidosService, PagosService, MaterialesService, CompradoresService, CategoriasService, ArtesanosService],

  
})
export class AppModule {}
