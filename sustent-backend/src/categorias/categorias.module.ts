import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasEntity } from './entity/categorias.entity';
import { CategoriasController } from './categorias.controller';

@Module({
  controllers: [CategoriasController],
  imports: [TypeOrmModule.forFeature([CategoriasEntity])],
  providers: [CategoriasService],

})
export class CategoriasModule {

  constructor(private readonly catService: CategoriasService) {}
  onModuleInit() {
    this.catService.crearFirtsCategoria();
  }
}
