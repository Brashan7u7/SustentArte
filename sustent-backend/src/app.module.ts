import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaterialesService } from './materiales/materiales.service';
import { CategoriasService } from './categorias/categorias.service';
import { MaterialesModule } from './materiales/materiales.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PagosService } from './pagos/pagos.service';
import { PagosModule } from './pagos/pagos.module';
import { DetallePagoService } from './detalle-pago/detalle-pago.service';
import { DetallePagoModule } from './detalle-pago/detalle-pago.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialesEntity } from './materiales/entity/materiales.entity';
import { CategoriasEntity } from './categorias/entity/categorias.entity';
import { PagosEntity } from './pagos/entity/pagos.entity';
import { DetallePagoEntity } from './detalle-pago/entity/detallePago.entity';
import { MaterialesController } from './materiales/materiales.controller';
import { CategoriasController } from './categorias/categorias.controller';
import { PagosController } from './pagos/pagos.controller';
import { DetallePagoController } from './detalle-pago/detalle-pago.controller';
import { CompradoresModule } from './compradores/compradores.module';
import { ArtesanosModule } from './artesanos/artesanos.module';
import { compradorEntity } from './compradores/entity/comprador.entity';
import { CompradoresService } from './compradores/compradores.service';
import { CompradoresController } from './compradores/compradores.controller';
import { artesanosEntity } from './artesanos/entity/artesanos.entity';
import { ArtesanosController } from './artesanos/artesanos.controller';
import { ArtesanosService } from './artesanos/artesanos.service';

import { PedidosModule } from './pedidos/pedidos.module';
import { ProductosModule } from './productos/productos.module';
import { PedidosEntity } from './pedidos/entity/pedidos.entity';
import { ProductoEntity } from './productos/entity/productos.entity';

import { AdminService } from './admin/admin.service';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { AdminEntity } from './admin/entity/admin.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwe',
      database: 'sus',
      entities: [
        artesanosEntity,CategoriasEntity,compradorEntity,DetallePagoEntity,MaterialesEntity,PagosEntity,PedidosEntity,ProductoEntity,AdminEntity
      ],
      synchronize: true,
    }),
    MaterialesModule, CategoriasModule, PagosModule, DetallePagoModule, CompradoresModule, ArtesanosModule,CompradoresModule,ArtesanosModule, PedidosModule, ProductosModule, AdminModule],
  controllers: [AppController, MaterialesController, CategoriasController, PagosController, DetallePagoController,CompradoresController,ArtesanosController, AdminController],
  providers: [AppService, MaterialesService, CategoriasService, PagosService, DetallePagoService,CompradoresService,ArtesanosService, AdminService],
})
export class AppModule {}
