import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PedidosEntity } from './entity/pedidos.entity';

@Injectable()
export class PedidosService {

    constructor(private dataSource:DataSource) { }

    async getPedidos()
    {
        try {
            const pedidos = await this.dataSource.getRepository(PedidosEntity).find({relations:['productos,comprador']});
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
            const pedidoFind = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:id},relations:['productos,comprador']});
            if (!pedidoFind) {
                return new HttpException('No se encontro el pedido',HttpStatus.NOT_FOUND);
            }

            return pedidoFind;
        } catch (error) {
            throw new HttpException('Error al obtener el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createPedido(pedido:PedidosEntity)
    {
        try {
            const pedidoBody = await this.dataSource.getRepository(PedidosEntity).create(pedido);

            const savePedido = await this.dataSource.getRepository(PedidosEntity).save(pedidoBody);

            return savePedido;
        } catch (error) {
            throw new HttpException('Error al crear el pedido',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
