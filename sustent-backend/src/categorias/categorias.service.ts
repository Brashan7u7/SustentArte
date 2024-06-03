import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CategoriasEntity } from './entity/categorias.entity';
import { CategoriasDto } from './dto/categorias.dto';

@Injectable()
export class CategoriasService {

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
            return await this.dataSource.getRepository(CategoriasEntity).remove(findCategoria);

        } catch (error) {
            throw new HttpException('Error al eliminar la categoria', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
