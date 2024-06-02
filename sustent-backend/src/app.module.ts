/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { SeguimientosController } from './seguimientos/seguimientos.controller';
import { ProductosController } from './productos/productos.controller';
import { PedidosController } from './pedidos/pedidos.controller';
import { PagosController } from './pagos/pagos.controller';
import { MaterialesController } from './materiales/materiales.controller';
import { CompradoresController } from './compradores/compradores.controller';
import { CategoriasController } from './categorias/categorias.controller';
import { ArtesanosController } from './artesanos/artesanos.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { SeguimientosService } from './seguimientos/seguimientos.service';
import { PedidosService } from './pedidos/pedidos.service';
import { PagosService } from './pagos/pagos.service';
import { MaterialesService } from './materiales/materiales.service';
import { CompradoresService } from './compradores/compradores.service';
import { CategoriasService } from './categorias/categorias.service';
import { ArtesanosService } from './artesanos/artesanos.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeguimientosModule } from './seguimientos/seguimientos.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { PagosModule } from './pagos/pagos.module';
import { MaterialesModule } from './materiales/materiales.module';
import { CompradoresModule } from './compradores/compradores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ArtesanosModule } from './artesanos/artesanos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosService } from './productos/productos.service';
import { productosEntity } from './productos/entity/productos.entity';
import { usuariosEntity } from './usuarios/entity/usuarios.entity';
import { seguimientosEntity } from './seguimientos/entity/seguimientos.entity';
import { pedidosEntity } from './pedidos/entity/pedidos.entity';
import { pagosEntity } from './pagos/entity/pagos.entity';
import { materialesEntity } from './materiales/entity/materiales.entity';
import { compradoresEntity } from './compradores/entity/compradores.entity';
import { categoriasEntity } from './categorias/entity/categorias.entity';
import { artesanosEntity } from './artesanos/entity/artesanos.entity';
import { DetallePagoEntity } from './detalle-pago/entity/detallePago.entity';
import { DetallePagoModule } from './detalle-pago/detalle-pago.module';
import { DetallePagoController } from './detalle-pago/detalle-pago.controller';
import { DetallePagoService } from './detalle-pago/detalle-pago.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'DJE20ben',
      database: 'sustent',
      entities: [
        productosEntity,
        usuariosEntity,
        seguimientosEntity,
        productosEntity,
        pedidosEntity,
        pagosEntity,
        materialesEntity,
        compradoresEntity,
        categoriasEntity,
        artesanosEntity,
        DetallePagoEntity
      ],
      synchronize: true,
    }),
    ProductosModule,
    UsuariosModule,
    SeguimientosModule,
    ProductosModule,
    PedidosModule,
    PagosModule,
    MaterialesModule,
    CompradoresModule,
    CategoriasModule,
    ArtesanosModule,
    DetallePagoModule
  ],
  controllers: [
    AppController,
    UsuariosController,
    SeguimientosController,
    ProductosController,
    PedidosController,
    PagosController,
    MaterialesController,
    CompradoresController,
    CategoriasController,
    ArtesanosController,
    ProductosController,
    DetallePagoController
  ],
  providers: [
    AppService,
    ProductosService,
    UsuariosService,
    SeguimientosService,
    PedidosService,
    PagosService,
    MaterialesService,
    CompradoresService,
    CategoriasService,
    ArtesanosService,
    ProductosService,
    DetallePagoService
  ],
})
export class AppModule {}
