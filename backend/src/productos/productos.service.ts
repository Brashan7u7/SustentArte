import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { productosDto } from './dto/productos.dto';
import { productosEntity } from './entity/productos.entity';
import { materialesEntity } from 'src/materiales/entity/materiales.entity';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class ProductosService {

    constructor(private dataSource:DataSource) { }

    async allProductos() {
        try {
            return await this.dataSource.getRepository(productosEntity).find({
                relations: [
                    'materiales',
                    'categorias',
                    'artesanos',
                    'pedidos',
                ],
            });
        } catch (error) {
            throw new HttpException("No se pudo conectar", HttpStatus.CONFLICT);
        }
    }

    async oneProducto(id: number) {
        try {
            return await this.dataSource.getRepository(productosEntity).findOne({
                where: { id_Producto: id },
                relations: [
                    'materiales',
                    'categorias',
                    'artesanos',
                    'pedidos',
                ],
            });
        } catch (error) {
            throw new HttpException("No se pudo encontrar el producto", HttpStatus.CONFLICT);
        }
    }

    async agregarProducto(newProducto: productosDto) {
        try {
            const baseProducto = await this.dataSource.getRepository(productosEntity).create(newProducto);
            const materiales = await this.dataSource.getRepository(materialesEntity).findOne({
                where: {
                    id_Material: newProducto.id_materiales,
                },relations:['productos']
            });
            const categoria = await this.dataSource.getRepository(categoriasEntity).findOne({
                where: {
                    id_categoria: newProducto.id_Categoria,
                },relations:['productos']
            });
            const artesano = await this.dataSource.getRepository(artesanosEntity).findOne({
                where:{
                id_Artesano: newProducto.id_Artesano,
                },relations:['productos']
            });

            baseProducto.materiales = materiales;
            baseProducto.categorias = categoria;
            baseProducto.artesanos = artesano;
            const saveProduct = await this.dataSource.getRepository(productosEntity).save(baseProducto);

            materiales.productos.push(saveProduct)
            artesano.productos.push(saveProduct)

            await this.dataSource.getRepository(materialesEntity).save(materiales)
            await this.dataSource.getRepository(artesanosEntity).save(artesano)

            return saveProduct
        } catch (error) {
            throw new HttpException("No se pudo agregar el producto", HttpStatus.CREATED);
        }
    }

    async eliminarProducto(id: number) {
        try {
            const deleteProducto = await this.dataSource.getRepository(productosEntity).findOne({
                where: { id_Producto: id },
            });
            return await this.dataSource.getRepository(productosEntity).delete(deleteProducto);
        } catch (error) {
            throw new HttpException("No se pudo eliminar el producto", HttpStatus.CONFLICT);
        }
    }

    async actualizarProducto(id: number, updatUsu: productosDto) {
        try {
            const updateProducto = await this.dataSource.getRepository(productosEntity).findOne({
                where: { id_Producto: id }
            });
            return await this.dataSource.getRepository(productosEntity).update(updateProducto, updatUsu);
        } catch (error) {
            throw new HttpException("No se pudo actualizar el producto", HttpStatus.CONFLICT);
        }
    }
}
