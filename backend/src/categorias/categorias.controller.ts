import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { categoriasDto } from './dto/categoriasCrear.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private service: CategoriasService) {}

  @Get()
  allCategorias() {
    return this.service.allCategorias();
  }

  @Get(':id')
  oneCategoria(id: number) {
    return this.service.oneCategoria(id);
  }

  @Post()
  agregarCategoria(newCategoria: categoriasDto) {
    return this.service.agregarCategoria(newCategoria);
  }

  @Put(':id')
  eliminarCategoria(@Param('id') id: number) {
    return this.service.eliminarCategoria(id);
  }
}
