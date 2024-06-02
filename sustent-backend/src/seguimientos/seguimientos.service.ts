import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { seguimientosEntity } from './entity/seguimientos.entity';
import { seguimientosDto } from './dto/seguimientosCrear.dto';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';

@Injectable()
export class SeguimientosService {

    constructor(private dataSource: DataSource) {}

    allSeguimientos() {
        try {
            return this.dataSource.getRepository(seguimientosEntity).find({ relations: ['pedidos'] });
        } catch (error) {
            throw new HttpException('No se pudo conectar', HttpStatus.CONFLICT);
        }
    }

    async oneSeguimiento(id: number) {
        try {
            return await this.dataSource.getRepository(seguimientosEntity).findOne({ where: { id_seguimientos: id }, relations: ['pedidos'] });
        } catch (error) {
            throw new HttpException('No se pudo encontrar el seguimiento', HttpStatus.CONFLICT);
        }
    }

    async agregarSeguimiento(newSeguimiento: seguimientosDto) {
        try {
            const baseSeguimiento = await this.dataSource.getRepository(seguimientosEntity).create(newSeguimiento);
            const pedido = await this.dataSource.getRepository(pedidosEntity).findOne({ where: { id_pedidos: newSeguimiento.id_pedidos } });

            baseSeguimiento.pedidos = pedido;

            return await this.dataSource.getRepository(seguimientosEntity).save(baseSeguimiento);
        } catch (error) {
            throw new HttpException('No se pudo agregar el seguimiento', HttpStatus.CREATED);
        }
    }

    async eliminarSeguimiento(id: number) {
        try {
            const deleteSeguimiento = await this.dataSource.getRepository(seguimientosEntity).findOne({ where: { id_seguimientos: id } });
            return await this.dataSource.getRepository(seguimientosEntity).delete(deleteSeguimiento);
        } catch (error) {
            throw new HttpException('No se pudo eliminar el seguimiento', HttpStatus.CONFLICT);
        }
    }

    async actualizarSeguimiento(id: number, updateSeguimiento: seguimientosDto) {
        try {
            const updateSeguimientoObj = await this.dataSource.getRepository(seguimientosEntity).findOne({ where: { id_seguimientos: id } });
            return await this.dataSource.getRepository(seguimientosEntity).update(updateSeguimientoObj, updateSeguimiento);
        } catch (error) {
            throw new HttpException('No se pudo actualizar el seguimiento', HttpStatus.CONFLICT);
        }
    }
}
