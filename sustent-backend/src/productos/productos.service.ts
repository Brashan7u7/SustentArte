import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { ProductoEntity } from './entity/productos.entity';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { ProductosDto } from './dto/productos.dto';
import { CategoriasEntity } from 'src/categorias/entity/categorias.entity';
import { MaterialesEntity } from 'src/materiales/entity/materiales.entity';

@Injectable()
export class ProductosService {

    constructor(private dataSource:DataSource) { }


    async getProductos()
    {
        try {
            const productos = await this.dataSource.getRepository(ProductoEntity).find({relations:['materiales','artesano','categoria']});
            if (!productos) {
                return new HttpException('No se encontraron productos',HttpStatus.NOT_FOUND);
            }

            return productos;
        } catch (error) {
            //console.log(error);
            
            throw new HttpException('Error al obtener los productos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async eliminarStock(id:number,cantidad:number)
    {
        try {
            const productoFind = await this.dataSource.getRepository(ProductoEntity).findOne({where:{id_producto:id}});
            if (!productoFind) {
                return new HttpException('No se encontro el producto',HttpStatus.NOT_FOUND);
            }
            console.log(productoFind);
            console.log(cantidad);
            console.log(productoFind.stock);
            
            
            const cantidadProducto = productoFind.stock - cantidad;
            productoFind.stock = cantidadProducto;
            
            return await this.dataSource.getRepository(ProductoEntity).save(productoFind);
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al modificar el stock del producto',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getProducto(id:number)
    {
        try {
            const productoFind = await this.dataSource.getRepository(ProductoEntity).findOne({where:{id_producto:id},relations:['materiales','artesano','categoria']});
            if (!productoFind) {
                return new HttpException('No se encontro el producto',HttpStatus.NOT_FOUND);
            }

            return productoFind;
        } catch (error) {
            throw new HttpException('Error al obtener el producto',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createProducto(producto:ProductosDto)
    {
        try {
            const productoBody = await this.dataSource.getRepository(ProductoEntity).create(producto);
            const findMaterial = await this.dataSource.getRepository(MaterialesEntity).findOne({where:{id_material:producto.materialesId},relations:['producto']});

            if (!findMaterial) {
                return new HttpException('No se encontro el material',HttpStatus.NOT_FOUND);
            }
            const findArtesano = await this.dataSource.getRepository(artesanosEntity).findOne({where:{id_artesano:producto.artesanoId},relations:['productos']});
            if (!findArtesano) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            const findccategoria = await this.dataSource.getRepository(CategoriasEntity).findOne({where:{id_categoria:producto.categoriaId},relations:['productos']});

            if (!findccategoria) {
                return new HttpException('No se encontro la categoria',HttpStatus.NOT_FOUND);
            }

            const saveProducto = await this.dataSource.getRepository(ProductoEntity).save(productoBody);

            findArtesano.productos.push(saveProducto);

            findccategoria.productos.push(saveProducto);

            findMaterial.producto.push(saveProducto);

            await this.dataSource.getRepository(artesanosEntity).save(findArtesano);
            await this.dataSource.getRepository(MaterialesEntity).save(findMaterial);
            await this.dataSource.getRepository(CategoriasEntity).save(findccategoria);

            return saveProducto;
        } catch (error) {
            //console.log(error);
            
            throw new HttpException('Error al crear el producto',HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    async updateProducto(id:number,producto:ProductosDto)
    {
        try {
            
            const productoFind = await this.dataSource.getRepository(ProductoEntity).findOne({where:{id_producto:id}});

            if (!productoFind) {
                return new HttpException('No se encontro el producto',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(ProductoEntity).update({id_producto:productoFind.id_producto},producto);
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al actualizar el producto',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteProducto(id:number)
    {
        try {
            const productoFind = await this.dataSource.getRepository(ProductoEntity).findOne({where:{id_producto:id}});

            if (!productoFind) {
                return new HttpException('No se encontro el producto',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(ProductoEntity).remove(productoFind)
        } catch (error) {
            throw new HttpException('Error al eliminar el producto',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async filtroMateriales(material:string)
    {
        try {
            const findMaterial = await this.dataSource.getRepository(MaterialesEntity).findOne({where:{nombre_material:material},relations:['producto']});
            const productos = await this.dataSource.getRepository(ProductoEntity).find({where:{materiales:findMaterial},relations:['materiales','artesano','categoria']});
            if (!productos) {
                return new HttpException('No se encontraron productos',HttpStatus.NOT_FOUND);
            }

            return productos;
        } catch (error) {
            //console.log(error);
            
            throw new HttpException('Error al obtener los productos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async filtroCategorias(categoria:string)
    {
        try {
            const findccategoria = await this.dataSource.getRepository(CategoriasEntity).findOne({where:{nombre_categoria:categoria},relations:['productos']});
            const productos = await this.dataSource.getRepository(ProductoEntity).find({where:{categoria:findccategoria},relations:['materiales','artesano','categoria']});
            if (!productos) {
                return new HttpException('No se encontraron productos',HttpStatus.NOT_FOUND);
            }

            return productos;
        } catch (error) {
            //console.log(error);
            
            throw new HttpException('Error al obtener los productos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async filtroArtesanos(id:number)
    {
        try {
            const findArtesano = await this.dataSource.getRepository(artesanosEntity).findOne({where:{id_artesano:id},relations:['productos']});

            const productos = await this.dataSource.getRepository(ProductoEntity).find({where:{artesano:findArtesano},relations:['materiales','artesano','categoria']});
            if (!findArtesano) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            return productos;
        } catch (error) {
            throw new HttpException('Error al obtener el artesano',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
