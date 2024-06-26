import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesDto } from './dto/materiales.dto';

@Controller('materiales')
export class MaterialesController {

    constructor(private serviceMteriales:MaterialesService) { }

    @Get()
    getMateriales() {
        return this.serviceMteriales.getMateriales();
    }

    @Get(':id')
    getMaterial(@Param('id') id:number) {
        return this.serviceMteriales.getMaterial(id);
    }

    @Post()
    createMaterial(@Body() material:MaterialesDto){
        return this.serviceMteriales.createMaterial(material);
    }

    @Put(':id')
    updateMaterial(@Param('id') id:number,@Body() material:MaterialesDto){
        return this.serviceMteriales.updateMaterial(id,material);
    }

    @Delete(':id')
    deleteMaterial(@Param('id') id:number){
        return this.serviceMteriales.deleteMaterial(id);
    }
}
