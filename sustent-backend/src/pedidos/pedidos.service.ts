import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PedidosEntity } from './entity/pedidos.entity';
import { PedidosDto } from './dto/pedidos.dto';
import { compradorEntity } from 'src/compradores/entity/comprador.entity';
import { SeguimientoEntity } from 'src/seguimiento/entity/seguimiento.entity';

@Injectable()
export class PedidosService {

    constructor(private dataSource:DataSource) { }

    async getPedidos()
    {
        try {
            const pedidos = await this.dataSource.getRepository(PedidosEntity).find({relations:['comprador']});
            if (!pedidos) {
                return new HttpException('No se encontraron pedidos',HttpStatus.NOT_FOUND);
            }

            return pedidos;
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al obtener los pedidos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getPedido(id:number)
    {
        try {
            const pedidoFind = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:id},relations:['comprador']});
            if (!pedidoFind) {
                return new HttpException('No se encontro el pedido',HttpStatus.NOT_FOUND);
            }

            return pedidoFind;
        } catch (error) {
            throw new HttpException('Error al obtener el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createPedido(pedido:PedidosDto)
    {
        try {
            const pedidoBody = await this.dataSource.getRepository(PedidosEntity).create(pedido);
            const baseSguimiento =                {
                num_Guia:'',
                empresa_Transporte:'',
                edo_seguimiento:'En espera de envio',
                pedidoId:pedidoBody.id_pedido
            }

            const seguimientoBody = await this.dataSource.getRepository(SeguimientoEntity).create(baseSguimiento);

            const saveSeguimiento = await this.dataSource.getRepository(SeguimientoEntity).save(seguimientoBody);

            pedidoBody.seguimiento = saveSeguimiento;

            const findComprador = await this.dataSource.getRepository(compradorEntity).findOne({where:{id_comprador:pedido.compradorId}});

            if (!findComprador) {
                return new HttpException('No se encontro el comprador',HttpStatus.NOT_FOUND);
            }
            const savePedido = await this.dataSource.getRepository(PedidosEntity).save(pedidoBody);

            findComprador.pedidos.push(savePedido);

            await this.dataSource.getRepository(compradorEntity).save(findComprador);
            return savePedido;
        } catch (error) {
            throw new HttpException('Error al crear el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updatePedido(id:number,pedido:PedidosDto)
    {
        try {
            
            const pedidoFind = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:id}});

            if (!pedidoFind) {
                return new HttpException('No se encontro el pedido',HttpStatus.NOT_FOUND);
            }

            const updatePedido = await this.dataSource.getRepository(PedidosEntity).update({id_pedido:pedidoFind.id_pedido},pedido);

            return updatePedido;
        } catch (error) {
            throw new HttpException('Error al actualizar el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deletePedido(id:number)
    {
        try {
            const pedidoFind = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:id}});

            if (!pedidoFind) {
                return new HttpException('No se encontro el pedido',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(PedidosEntity).remove(pedidoFind);
        } catch (error) {
            throw new HttpException('Error al eliminar el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
