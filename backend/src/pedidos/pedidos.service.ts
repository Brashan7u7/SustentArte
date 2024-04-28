import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { pedidosEntity } from './entity/pedidos.entity';
import { pedidosDto } from './dto/pedidos.dto';
import { compradoresEntity } from 'src/compradores/entity/compradores.entity';
import { productosEntity } from 'src/productos/entity/productos.entity';
import { seguimientosEntity } from 'src/seguimientos/entity/seguimientos.entity';

@Injectable()
export class PedidosService {

    constructor(private datasource:DataSource)
    {}

    obtenerPedidos()
    {
        try {
            return this.datasource.getRepository(pedidosEntity).find({relations:['compradores','productos','seguimientos']})
        } catch (error) {
            throw new HttpException("No se pudo obtener los pedidos",HttpStatus.FOUND)
        }
    }

    async unPedido(id:number)
    {
        try {
            return this.datasource.getRepository(pedidosEntity).findOne({where:{id_pedidos:id},relations:['compradores','productos','seguimientos']})
        } catch (error) {
            throw new HttpException("No se pudo obtener los pedidos",HttpStatus.FOUND)
        }
    }

    async crearPedido(createpedido:pedidosDto)
    {
        try {
            const newPedido = await this.datasource.getRepository(pedidosEntity).create(createpedido)
            const findComprador = await this.datasource.getRepository(compradoresEntity).findOne({where:{id_Compradores:createpedido.compradoresId}})
            const findProduct = await this.datasource.getRepository(productosEntity).findOne({where:{id_Producto:createpedido.productosId}})
            const findSeguimiento = await this.datasource.getRepository(seguimientosEntity).findOne({where:{id_seguimientos:createpedido.seguimientosId}})

            newPedido.compradores = findComprador
            newPedido.productos.push(findProduct)
            newPedido.seguimientos.push(findSeguimiento)

            const createPedido = await this.datasource.getRepository(pedidosEntity).save(newPedido)

            return createPedido
        } catch (error) {
            
        }
    }

    async actualizarPedido(id:number,pedidosDto:pedidosDto)
    {
        try {
            const pedidoActualiado = await this.datasource.getRepository(pedidosEntity).findOne({where:{id_pedidos:id},relations:['compradores','productos','seguimientos']})
            
            return await this.datasource.getRepository(pedidosEntity).update(pedidoActualiado,pedidosDto)
        } catch (error) {
            throw new HttpException("No se pudo actualizar el pedido", HttpStatus.CONFLICT);
        }
    }

    async eliminarPedido(id:number)
    {
        try {
            const eliminarActualiado = await this.datasource.getRepository(pedidosEntity).findOne({where:{id_pedidos:id},relations:['compradores','productos','seguimientos']})
            return await this.datasource.getRepository(pedidosEntity).delete(eliminarActualiado)
        } catch (error) {
            throw new HttpException("No se pudo eliminar el pedido", HttpStatus.CONFLICT);
        }
    }
}
