import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PagosEntity } from './entity/pagos.entity';
import { PagosDto } from './dto/pagos.dto';
import { DetallePagoEntity } from 'src/detalle-pago/entity/detallePago.entity';
import { find } from 'rxjs';
import { DetallePagoService } from 'src/detalle-pago/detalle-pago.service';
import { compradorEntity } from 'src/compradores/entity/comprador.entity';
import { log } from 'console';

@Injectable()
export class PagosService {
    constructor(private dataSources: DataSource) { }

    async getPagos() {
        try {
            const pagos = await this.dataSources
                .getRepository(PagosEntity)
                .find({ relations: ['detalle','comprador'] });
            if (!pagos) {
                return new HttpException('No seencontraron pagos', HttpStatus.NOT_FOUND);
            }
            return pagos;
        } catch (error) {
            throw new HttpException(
                'Error al obtener los pagos',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getPago(id: number) {
        try {
            const findPago = await this.dataSources
                .getRepository(PagosEntity)
                .findOne({ where: { id_pago: id }, relations: ['detalle','comprador'] });
            if (!findPago) {
                return new HttpException('No se encontro el pago', HttpStatus.NOT_FOUND);
            }
            return findPago;
        } catch (error) {
            throw new HttpException(
                'Error al obtener el pagos',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async createPago(pago: PagosDto) {
        try {
            const bodyPago = this.dataSources.getRepository(PagosEntity).create(pago);
            //console.log(pago);
            
            const findDetalle = await this.dataSources
                .getRepository(DetallePagoEntity)
                .findOne({
                    where: { id_detalle: pago.detalleId }
                });

            if (!findDetalle) {
                return new HttpException(
                    'No se encontro el detalle',
                    HttpStatus.NOT_FOUND,
                );
            }

            const compradorFind = await this.dataSources.getRepository(compradorEntity).findOne({ where: { id_comprador: pago.compradorId }, relations: ['pagos']});

            if (!compradorFind) {
                return new HttpException(
                    'No se encontro el comprador',
                    HttpStatus.NOT_FOUND,
                );
            }

            
            bodyPago.detalle = findDetalle;

            const savePago = await this.dataSources.getRepository(PagosEntity).save(bodyPago);

            findDetalle.pagoId = savePago.id_pago;            

            await this.dataSources.getRepository(DetallePagoEntity).save(findDetalle);

            compradorFind.pagos.push(savePago);

            await this.dataSources.getRepository(compradorEntity).save(compradorFind);
            
            return savePago
        } catch (error) {
            //console.log(error);
            
            throw new HttpException(
                'Error al crear el pago',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async updatePago(id: number, pago: PagosDto) {
        try {
            const findPago = await this.dataSources
                .getRepository(PagosEntity)
                .findOne({ where: { id_pago: id } });

            if (!findPago) {
                return new HttpException('No se encontro el pago', HttpStatus.NOT_FOUND);
            }

            const findDetalle = await this.dataSources
                .getRepository(DetallePagoEntity)
                .findOne({ where: { id_detalle: pago.detalleId } });

            if (!findDetalle) {
                return new HttpException(
                    'No se encontro el detalle',
                    HttpStatus.NOT_FOUND,
                );
            }

            findPago.detalle = findDetalle;            

            const upPago = await this.dataSources.getRepository(PagosEntity).save(findPago);

            return await this.dataSources
                .getRepository(PagosEntity)
                .update({id_pago:upPago.id_pago},pago);
        } catch (error) {
            throw new HttpException(
                'Error al actualizar el pago',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async deletePago(id: number) {
        try {
            const findPago = await this.dataSources
                .getRepository(PagosEntity)
                .findOne({ where: { id_pago: id } });

            if (!findPago) {
                return new HttpException('No se encontro el pago', HttpStatus.NOT_FOUND);
            }


            return await this.dataSources.getRepository(PagosEntity).delete(findPago);
        } catch (error) {
            throw new HttpException(
                'Error al eliminar el pago',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
