import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaModule } from './prueba/prueba.module';
import { ProductosService } from './servicios/productos/productos.service';

@Module({
  imports: [PruebaModule],
  controllers: [AppController],
  providers: [AppService, ProductosService],
})
export class AppModule {}
