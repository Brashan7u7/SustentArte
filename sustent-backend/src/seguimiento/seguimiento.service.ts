import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SeguimientoEntity } from './entity/seguimiento.entity';
import { SeguimientoDto } from './dto/seguimiento.dto';
import { PedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import { updateSeguimientoDto } from './dto/updateSeguimiento.dto';

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
            //console.log(error);
            
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


    async updateSeguimiento(id:number,seguimiento:updateSeguimientoDto)
    {
        try {            
            const seguimientoBody = await this.dataSource.getRepository(SeguimientoEntity).findOne({where:{id_seguimiento:id}});
            if (!seguimientoBody) {
                return new HttpException('No se encontro el seguimiento',HttpStatus.NOT_FOUND);
            }

            const findpedido = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:seguimiento.id_pedido}});
            if (!findpedido) {
                return new HttpException('No se encontro el pedido',HttpStatus.NOT_FOUND);
            }

            findpedido.edo_Pedido = 1;
            seguimientoBody.num_Guia = seguimiento.num_Guia;
            seguimientoBody.empresa_Transporte = seguimiento.empresa_Transporte;            
            const savePedido = await this.dataSource.getRepository(PedidosEntity).save(findpedido);
            return await this.dataSource.getRepository(SeguimientoEntity).save(seguimientoBody);
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
