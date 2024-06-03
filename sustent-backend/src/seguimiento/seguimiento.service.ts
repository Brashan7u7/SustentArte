import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SeguimientoEntity } from './entity/seguimiento.entity';
import { SeguimientoDto } from './dto/seguimiento.dto';

@Injectable()
export class SeguimientoService {

    constructor(private dataSource:DataSource) { }

    async getSeguimientos()
    {
        try {
            const seguimientos = await this.dataSource.getRepository(SeguimientoEntity).find();
            if (!seguimientos) {
                return new HttpException('No se encontraron seguimientos',HttpStatus.NOT_FOUND);
            }

            return seguimientos;
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al obtener los seguimientos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getSeguimiento(id:number)
    {
        try {
            const seguimientoFind = await this.dataSource.getRepository(SeguimientoEntity).findOne({where:{id_seguimiento:id}});
            if (!seguimientoFind) {
                return new HttpException('No se encontro el seguimiento',HttpStatus.NOT_FOUND);
            }

            return seguimientoFind;
        } catch (error) {
            throw new HttpException('Error al obtener el seguimiento',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async updateSeguimiento(id:number,seguimiento:SeguimientoDto)
    {
        try {
            const seguimientoBody = await this.dataSource.getRepository(SeguimientoEntity).findOne({where:{id_seguimiento:id}});
            if (!seguimientoBody) {
                return new HttpException('No se encontro el seguimiento',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(SeguimientoEntity).update({id_seguimiento:seguimientoBody.id_seguimiento},seguimiento);
        } catch (error) {
            throw new HttpException('Error al actualizar el seguimiento',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteSeguimiento(id:number)
    {
        try {
            const seguimientoBody = await this.dataSource.getRepository(SeguimientoEntity).findOne({where:{id_seguimiento:id}});
            if (!seguimientoBody) {
                return new HttpException('No se encontro el seguimiento',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(SeguimientoEntity).remove(seguimientoBody);
        } catch (error) {
            throw new HttpException('Error al eliminar el seguimiento',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
