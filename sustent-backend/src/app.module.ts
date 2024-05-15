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
import { UsuarioModule } from './usuario/usuario.module';
import { ArtesanosModule } from './artesanos/artesanos.module';
import { usuarioEntity } from './usuario/entity/usuario.entity';
import { compradorEntity } from './compradores/entity/comprador.entity';
import { UsuarioService } from './usuario/usuario.service';
import { CompradoresService } from './compradores/compradores.service';
import { CompradoresController } from './compradores/compradores.controller';
import { UsuarioController } from './usuario/usuario.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'qwe',
      database: 'sustent',
      entities: [
        MaterialesEntity, CategoriasEntity, PagosEntity, DetallePagoEntity,usuarioEntity,compradorEntity
      ],
      synchronize: true,
    }),
    MaterialesModule, CategoriasModule, PagosModule, DetallePagoModule, CompradoresModule, UsuarioModule, ArtesanosModule,UsuarioModule,CompradoresModule],
  controllers: [AppController, MaterialesController, CategoriasController, PagosController, DetallePagoController,CompradoresController,UsuarioController],
  providers: [AppService, MaterialesService, CategoriasService, PagosService, DetallePagoService,UsuarioService,CompradoresService],
})
export class AppModule {}
