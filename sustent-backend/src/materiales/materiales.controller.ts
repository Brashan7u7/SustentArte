import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesDto } from './dto/materiales.dto';

@Controller('materiales')
export class MaterialesController {
  constructor(private service: MaterialesService) {}

  @Get()
  allMateriales() {
    return this.service.allMateriales();
  }

  @Get(':id')
  oneMaterial(@Param('id') id: number) {
    return this.service.oneMaterial(id);
  }

  @Post()
  agregarMaterial(@Body() newMaterial: MaterialesDto) {
    return this.service.agregarMaterial(newMaterial);
  }

  @Put(':id')
  updateMaterial(@Param('id') id: number, @Body() newMaterial: MaterialesDto) {
    return this.service.actualizarMaterial(id, newMaterial);
  }
}
