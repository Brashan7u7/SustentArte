import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {

    constructor(private serviceProductos:ProductosService) { }

    @Get()
    async getProductos() {
        return this.serviceProductos.getProductos();
    }

    @Get(':id')
    async getProducto(@Param('id') id:number) {
        return this.serviceProductos.getProducto(id);
    }

    @Post()
    async createProducto(@Body() producto:ProductosDto) {
        return this.serviceProductos.createProducto(producto);
    }

    @Put(':id')
    async updateProducto(@Param('id') id:number,@Body() producto:ProductosDto) {
        return this.serviceProductos.updateProducto(id,producto);
    }

    @Delete()
    async deleteProducto(@Param('id') id:number) {
        return this.serviceProductos.deleteProducto(id);
    }

}
