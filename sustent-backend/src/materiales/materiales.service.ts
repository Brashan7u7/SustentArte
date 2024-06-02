import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { MaterialesEntity } from './entity/materiales.entity';
import { MaterialesDto } from './dto/materiales.dto';

@Injectable()
export class MaterialesService {

    constructor(private dataSource:DataSource) { }

    async getMateriales() {
        try {
            const materiales = await this.dataSource.getRepository(MaterialesEntity).find();
            if (!materiales) {
                return new HttpException('No se encontraron materiales', HttpStatus.NOT_FOUND);
            }
            return materiales;
        } catch (error) {
            throw new HttpException(
                'Error al obtener los materiales',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getMaterial(id: number) {
        try {
            const findMaterial = await this.dataSource.getRepository(MaterialesEntity).findOne({ where: { id_material: id } });
            if (!findMaterial) {
                return new HttpException('No se encontro el material', HttpStatus.NOT_FOUND);
            }
            return findMaterial;
        } catch (error) {
            throw new HttpException(
                'Error al obtener el material',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async createMaterial(material: MaterialesDto) {
        try {
            const bodyMaterial = this.dataSource.getRepository(MaterialesEntity).create(material);

            return await this.dataSource.getRepository(MaterialesEntity).save(bodyMaterial);

        } catch (error) {
            throw new HttpException('Error al crear el material', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateMaterial(id: number, material: MaterialesDto) {
        try {
            const findMaterial = await this.dataSource.getRepository(MaterialesEntity).findOne({ where: { id_material: id } });
            if (!findMaterial) {
                return new HttpException('No se encontro el material', HttpStatus.NOT_FOUND);
            }
            const updateMaterial = await this.dataSource.getRepository(MaterialesEntity).save(findMaterial);
            return await this.dataSource.getRepository(MaterialesEntity).update(updateMaterial,material);

        } catch (error) {
            throw new HttpException('Error al actualizar el material', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteMaterial(id: number) {
        try {
            const findMaterial = await this.dataSource.getRepository(MaterialesEntity).findOne({ where: { id_material: id } });
            if (!findMaterial) {
                return new HttpException('No se encontro el material', HttpStatus.NOT_FOUND);
            }
            return await this.dataSource.getRepository(MaterialesEntity).delete(findMaterial);

        } catch (error) {
            throw new HttpException('Error al eliminar el material', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
