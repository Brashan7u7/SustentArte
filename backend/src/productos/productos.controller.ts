import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { productosDto } from './dto/productos.dto';


@Controller('productos')
export class ProductosController {

    constructor(private service: ProductosService){
    }

    @Get()
    allProductos(){
        return this.service.allproductos();
    }

    @Get(':id')
    oneProducto(@Param('id') id:number){
        return this.service.oneProducto(id);
    }

    @Post()
    agregarProducto(@Body() newProducto: productosDto){
        return this.service.agregarProducto(newProducto);
    }

    @Put(':id')
    updateProducto(@Param('id') id:number, @Body() bodyProducto:productosDto){
        return this.service.actualizarProducto(id, bodyProducto);
    }

}
