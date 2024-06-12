import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PedidosEntity } from './entity/pedidos.entity';
import { PedidosDto } from './dto/pedidos.dto';
import { compradorEntity } from 'src/compradores/entity/comprador.entity';
import { SeguimientoEntity } from 'src/seguimiento/entity/seguimiento.entity';
import { ProductoEntity } from 'src/productos/entity/productos.entity';
import { find } from 'rxjs';
import { query } from 'express';
import { PedidosProductoEntity } from 'src/pedidos-productos/entities/pedidos-producto.entity';

@Injectable()
export class PedidosService {

    constructor(private dataSource:DataSource) { }

    async getPedidos()
    {
        try {
            const pedidos = await this.dataSource.getRepository(PedidosEntity).find({relations:['comprador','productos','seguimiento']});
            if (!pedidos) {
                return new HttpException('No se encontraron pedidos',HttpStatus.NOT_FOUND);
            }

            return pedidos;
        } catch (error) {
            console.log(error);
            
            throw new HttpException('Error al obtener los pedidos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async pedidosComprador(id:number)
    {
        try {
            const pedidos = await this.dataSource.getRepository(PedidosEntity).find({where:{comprador:{id_comprador:id}},relations:['comprador','productos','seguimiento']});
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
            const pedidoFind = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:id},relations:['comprador','productos','seguimiento']});
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
            
            console.log(pedido);
            
            const pedidoBody = await this.dataSource.getRepository(PedidosEntity).create(pedido);
            
            const findComprador = await this.dataSource.getRepository(compradorEntity).findOne({where:{id_comprador:pedido.compradorId},relations:['pedidos']});

            if (!findComprador) {
                return new HttpException('No se encontro el comprador',HttpStatus.NOT_FOUND);
            }
            const savePedido = await this.dataSource.getRepository(PedidosEntity).save(pedidoBody); 
            let idPedido = savePedido.id_pedido;         
            const baseSguimiento =                {
                num_Guia:'',
                empresa_Transporte:'',
                edo_seguimiento:'En espera de envio',
                pedidoId:savePedido.id_pedido
            }


            const seguimientoBody = await this.dataSource.getRepository(SeguimientoEntity).create(baseSguimiento);

            const saveSeguimiento = await this.dataSource.getRepository(SeguimientoEntity).save(seguimientoBody);

            const findPedido = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:savePedido.id_pedido},relations:['seguimiento','productos']});

            findPedido.seguimiento = saveSeguimiento;

            await this.dataSource.getRepository(PedidosEntity).save(findPedido);

            findComprador.pedidos.push(savePedido);

            await this.dataSource.getRepository(compradorEntity).save(findComprador);

            for (let i = 0; i < pedido.productosA.length; i++) {
                const findProducto = await this.dataSource.getRepository(ProductoEntity).findOne({where:{id_producto:pedido.productosA[i].id_producto}});
                const findPedidooo = await this.dataSource.getRepository(PedidosEntity).findOne({where:{id_pedido:idPedido}});
                const bodyPedProd =
                {
                    idComprador:pedido.compradorId,
                    productos:findProducto,
                    pedidos:findPedidooo,
                }

                const savePedProd = await this.dataSource.getRepository(PedidosProductoEntity).save(bodyPedProd);
                console.log(savePedProd);
                
            }
            return findPedido;
        } catch (error) {
            console.log(error);
            
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
