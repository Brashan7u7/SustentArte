import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DetallePagoEntity } from './entity/detallePago.entity';
import { DetallePagoDto } from './dto/detallePago.dto';


@Injectable()
export class DetallePagoService {

    constructor(private dataSources: DataSource) {


    }
    

    async getDetallePagos()
    {
        try {
            const detallePagos = await this.dataSources.getRepository(DetallePagoEntity).find();
            if(!detallePagos)
            {
                throw new HttpException('No se encontraron detallePagos',HttpStatus.NOT_FOUND)
            }
            return detallePagos
        } catch (error) {
            throw new HttpException('Error al obtener los detallePagos',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async getDetallePago(id:number)
    {
        try {
            const findDetallePago = await this.dataSources.getRepository(DetallePagoEntity).findOne({where:{id_detalle:id}});
            if(!findDetallePago)
            {
                return new HttpException('No se encontro el detallePago',HttpStatus.NOT_FOUND)
            }
            return findDetallePago
        } catch (error) {
            throw new HttpException('Error al obtener el detallePago',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createDetallePago(detallePago:DetallePagoDto)
    {
        try {
            const bodyDetallePago = this.dataSources.getRepository(DetallePagoEntity).create(detallePago);

            return await this.dataSources.getRepository(DetallePagoEntity).save(bodyDetallePago);

        } catch (error) {
            throw new HttpException('Error al crear el detallePago',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async updateDetallePago(id:number,detallePago:DetallePagoDto)
    {
        try {
            const findDetallePago = await this.dataSources.getRepository(DetallePagoEntity).findOne({where:{id_detalle:id}});
            if(!findDetallePago)
            {
                throw new HttpException('No se encontro el detallePago',HttpStatus.NOT_FOUND)
            }
            return await this.dataSources.getRepository(DetallePagoEntity).update({id_detalle:findDetallePago.id_detalle},detallePago);

        } catch (error) {
            throw new HttpException('Error al actualizar el detallePago',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async deleteDetallePago(id:number)
    {
        try {
            const findDetallePago = await this.dataSources.getRepository(DetallePagoEntity).findOne({where:{id_detalle:id}});
            if(!findDetallePago)
            {
                throw new HttpException('No se encontro el detallePago',HttpStatus.NOT_FOUND)
            }
            return await this.dataSources.getRepository(DetallePagoEntity).remove(findDetallePago)
        } catch (error) {
            throw new HttpException('Error al eliminar el detallePago',HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
