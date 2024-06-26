import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosDto } from './dto/productos.dto';
import { ProductoStockDto } from './dto/productoStock.dto';

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

    @Get('material/:mat')
    async getProductoMaterial(@Param('mat') mat:string) {
        return this.serviceProductos.filtroMateriales(mat);
    }
    @Get('categoria/:cat')
    async getProductoCategoria(@Param('cat') cat:string) {
        return this.serviceProductos.filtroCategorias(cat);
    }
    
    @Get('artesano/:art')
    async getProductoArtesano(@Param('art') art:number) {
        return this.serviceProductos.filtroArtesanos(art);
    }

    @Post()
    async createProducto(@Body() producto:ProductosDto) {
        return this.serviceProductos.createProducto(producto);
    }

    @Put(':id')
    async updateProducto(@Param('id') id:number,@Body() producto:ProductosDto) {
        return this.serviceProductos.updateProducto(id,producto);
    }

    @Post('stock')
    async updateStock(@Body() producto:ProductoStockDto) {
        console.log(producto);
        
        return this.serviceProductos.eliminarStock(producto.id_producto,1);
    }

    @Delete(':id')
    async deleteProducto(@Param('id') id:number) {
        return this.serviceProductos.deleteProducto(id);
    }

}
