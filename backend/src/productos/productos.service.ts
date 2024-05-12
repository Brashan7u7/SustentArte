import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { productosDto } from './dto/productos.dto';
import { productosEntity } from './entity/productos.entity';
import { materialesEntity } from 'src/materiales/entity/materiales.entity';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { DataSource } from 'typeorm';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';

@Injectable()
export class ProductosService {

    constructor(private dataSource:DataSource) { }


    allproductos(){
        try{
            return this.dataSource.getRepository(productosEntity).find()
        }catch(error){
            throw new HttpException("No se pudo conectar",HttpStatus.CONFLICT)
        }
    }

    async oneProducto(id:number){
        try {
            return await this.dataSource.getRepository(productosEntity).findOne({where:{id_Producto:id},relations:['materiales', 'artesanos', 'pedidos', 'categorias']})
        } catch (error) {
            throw new HttpException("No se pudo encontrar el usuario",HttpStatus.CONFLICT)
        }
    }

    async agregarProducto(newProducto: productosDto){
        try {
            const baseProductos = await this.dataSource.getRepository(productosEntity).create(newProducto)
            const materialesProductos = await this.dataSource.getRepository(materialesEntity).findOne({where:{id_Material: newProducto.idMateriales}})
            const artesanoProductos = await this.dataSource.getRepository(artesanosEntity).findOne({where:{id_Artesano:newProducto.idArtesanos}})
            const pedidosProductos = await this.dataSource.getRepository(pedidosEntity).findOne({where:{id_pedidos:newProducto.idPedidos}})
            const categoriasProductos = await this.dataSource.getRepository(categoriasEntity).findOne({where:{id_categoria:newProducto.id_Categoria}})
            

            baseProductos.materiales = materialesProductos
            baseProductos.artesanos.push(artesanoProductos)
            baseProductos.pedidos = pedidosProductos
            baseProductos.categorias = categoriasProductos

            return await this.dataSource.getRepository(productosEntity).save(baseProductos)
        } catch (error) {
            throw new HttpException("No se pudo agregar el usuario",HttpStatus.CREATED)
        }
    }

    async eliminarProducto(id:number){
        try {
            const deleteProducto= await this.dataSource.getRepository(productosEntity).findOne({where:{id_Producto:id}})
            return await this.dataSource.getRepository(productosEntity).delete(deleteProducto)
        } catch (error) {
            throw new HttpException("No se pudo eliminar el producto",HttpStatus.CONFLICT)
        }
    }

    async actualizarProducto(id:number,updatProducto:productosDto){
        try{
            const updateProducto = await this.dataSource.getRepository(productosEntity).findOne({where:{id_Producto:id}})
            return await this.dataSource.getRepository(productosEntity).update(updateProducto,updatProducto)
        }catch(error){
            throw new HttpException("No se pudo actualizar el producto",HttpStatus.CONFLICT)
        }
    }

}
