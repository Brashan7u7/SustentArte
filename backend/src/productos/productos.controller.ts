import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { productosDto } from './dto/productos.dto';

@Controller('productos')
export class ProductosController {

    constructor(private readonly productosService: ProductosService) { }

    @Get()
    async findAllProducts() {
        return await this.productosService.allProductos();
    }

    @Get(':id')
    async findOneProduct(@Param('id') id: number) {
        return await this.productosService.oneProducto(id);
    }

    @Post()
    async createProduct(@Body() createProductoDto:productosDto) {
        return await this.productosService.agregarProducto(createProductoDto);
    }

    @Put(':id')
    async updateProduct(@Param('id') id: number, @Body() updateProductoDto: productosDto) {
        return await this.productosService.actualizarProducto(id, updateProductoDto);
    }

    @Delete(':id')
    async removeProduct(@Param('id') id: number) {
        return await this.productosService.eliminarProducto(id);
    }

}
