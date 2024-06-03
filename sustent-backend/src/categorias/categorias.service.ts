import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CategoriasEntity } from './entity/categorias.entity';
import { CategoriasDto } from './dto/categorias.dto';
import { ProductoEntity } from 'src/productos/entity/productos.entity';

@Injectable()
export class CategoriasService {

    private readonly logger = new Logger(CategoriasService.name);


    constructor(private dataSource:DataSource) { }

    async getCategorias() {
        try {
            const categorias = await this.dataSource.getRepository(CategoriasEntity).find();
            if (!categorias) {
                return new HttpException('No se encontraron categorias', HttpStatus.NOT_FOUND);
            }
            return categorias;
        } catch (error) {
            throw new HttpException(
                'Error al obtener las categorias',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getCategoria(id: number) {
        try {
            const findCategoria = await this.dataSource.getRepository(CategoriasEntity).findOne({ where: { id_categoria: id } });
            if (!findCategoria) {
                return new HttpException('No se encontro la categoria', HttpStatus.NOT_FOUND);
            }
            return findCategoria;
        } catch (error) {
            throw new HttpException(
                'Error al obtener la categoria',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async createCategoria(categoria: CategoriasDto) {
        try {
            const bodyCategoria = this.dataSource.getRepository(CategoriasEntity).create(categoria);

            return await this.dataSource.getRepository(CategoriasEntity).save(bodyCategoria);

        } catch (error) {
            throw new HttpException('Error al crear la categoria', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateCategoria(id: number, categoria: CategoriasDto) {
        try {
            const findCategoria = await this.dataSource.getRepository(CategoriasEntity).findOne({ where: { id_categoria: id } });
            if (!findCategoria) {
                return new HttpException('No se encontro la categoria', HttpStatus.NOT_FOUND);
            }

            const updateCategoria = await this.dataSource.getRepository(CategoriasEntity).save(findCategoria);
            return await this.dataSource.getRepository(CategoriasEntity).update(updateCategoria, categoria);

        } catch (error) {
            throw new HttpException('Error al actualizar la categoria', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCategoria(id: number) {
        try {
            
            const findCategoria = await this.dataSource.getRepository(CategoriasEntity).findOne({ where: { id_categoria: id } });
            
            if (!findCategoria) {
                return new HttpException('No se encontro la categoria', HttpStatus.NOT_FOUND);
            }

            const productos = await this.dataSource.getRepository(ProductoEntity).find();

            productos.forEach(async (producto) => {
                producto.categoria = await this.dataSource.getRepository(CategoriasEntity).findOne({ where: { nombre_categoria: 'default' } });
                await this.dataSource.getRepository(ProductoEntity).save(productos);
            });
            return await this.dataSource.getRepository(CategoriasEntity).remove(findCategoria);

        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al eliminar la categoria', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async crearFirtsCategoria() {
        const categoria =
          await this.dataSource.getRepository(CategoriasEntity).findOne({where:{nombre_categoria:'default'}});
        if (!categoria) {
          this.logger.verbose('Creating the first user');
          const categoriaCreado = await this.dataSource.getRepository(CategoriasEntity).save({
            nombre_categoria: 'default',
          });
          this.logger.verbose('First category created: ' + categoriaCreado.nombre_categoria);
        }
    }
}
