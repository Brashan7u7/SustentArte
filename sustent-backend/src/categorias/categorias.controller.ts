import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasDto } from './dto/categorias.dto';

@Controller('categorias')
export class CategoriasController {

    constructor(private serviceCategorias:CategoriasService) { }

    @Get()
    getCategorias() {
        return this.serviceCategorias.getCategorias();
    }

    @Get(':id')
    getCategoria(@Param('id') id:number) {
        return this.serviceCategorias.getCategoria(id);
    }

    @Post()
    createCategoria(@Body() categoria:CategoriasDto){
        return this.serviceCategorias.createCategoria(categoria);
    }

    @Put(':id')
    updateCategoria(@Param('id') id:number,@Body() categoria:CategoriasDto){
        return this.serviceCategorias.updateCategoria(id,categoria);
    }

    @Delete(':id')
    deleteCategoria(@Param('id') id:number){
        return this.serviceCategorias.deleteCategoria(id);
    }
}
