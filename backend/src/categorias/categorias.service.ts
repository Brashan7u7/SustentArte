import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { categoriasEntity } from './entity/categorias.entity';
import { categoriasDto } from './dto/categoriasCrear.dto';
import { productosEntity } from 'src/productos/entity/productos.entity';

@Injectable()
export class CategoriasService {
    constructor(private datasource:DataSource){}

    allCategorias(){
        try{
            return this.datasource.getRepository(categoriasEntity).find({relations:['productos']});
        }catch(error){
            throw new HttpException('No se pudo obtener las categorias', HttpStatus.CONFLICT);
        }
    }

    async oneCategoria(id:number){
        try{
            return await this.datasource.getRepository(categoriasEntity).findOne({where:{id_categoria:id}, relations:['productos']});
        }catch(error){
            throw new HttpException('No se pudo encontrar la categoria', HttpStatus.CONFLICT);
        }
    }
    async agregarCategoria(newCategoria: categoriasDto){
        try{
            const baseCategoria = await this.datasource.getRepository(categoriasEntity).create(newCategoria);
            const productosCategoria = await this.datasource.getRepository(productosEntity).findOne({where: {id_Producto: newCategoria.idCategoria}})
            
            baseCategoria.productos=productosCategoria;
            return await this.datasource.getRepository(categoriasEntity).save(baseCategoria);
        }catch(error){
            throw new HttpException('No se pudo crear la categoria', HttpStatus.CONFLICT);
        }
    }

    async eliminarCategoria(id: number){
        try{
            const categoriaEliminada = await this.datasource.getRepository(categoriasEntity).findOne({where:{id_categoria:id}});
            return await this.datasource.getRepository(categoriasEntity).remove(categoriaEliminada);
        }catch(error){
            throw new HttpException('No se pudo eliminar la categoria', HttpStatus.CONFLICT);
        }
    }

    async actualizarCategoria(id: number, updateCategoria: categoriasDto){
        try{
            const categoriaActualizada = await this.datasource.getRepository(categoriasEntity).findOne({where:{id_categoria:id}});
            return await this.datasource.getRepository(categoriasEntity).update(categoriaActualizada, updateCategoria);
        }catch(error){
            throw new HttpException('No se pudo actualizar la categoria', HttpStatus.CONFLICT);
        }
    }
}
