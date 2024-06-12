import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePedidosProductoDto } from './dto/create-pedidos-producto.dto';
import { UpdatePedidosProductoDto } from './dto/update-pedidos-producto.dto';
import { DataSource } from 'typeorm';
import { PedidosProductoEntity } from './entities/pedidos-producto.entity';

@Injectable()
export class PedidosProductosService {

  constructor(private dataSource:DataSource) { }
  create(createPedidosProductoDto: CreatePedidosProductoDto) {
    return 'This action adds a new pedidosProducto';
  }

  findAll() {
    try {
      const pedidosProductos = this.dataSource.getRepository(PedidosProductoEntity).find({relations:['pedidos','productos']});
      if (!pedidosProductos) {
        return new HttpException('No se encontraron pedidos productos',HttpStatus.NOT_FOUND);
      }
      return pedidosProductos;
    } catch (error) {
      throw new HttpException('Error al obtener los productos',HttpStatus.INTERNAL_SERVER_ERROR);

    }
  }

  async productosPedido(idComprador:number)
  {
      try {
          const productos = await this.dataSource.getRepository(PedidosProductoEntity).find({where:{idComprador:idComprador},relations:['productos']});
          if (!productos) {
              return new HttpException('No se encontraron productos',HttpStatus.NOT_FOUND);
          }

          return productos;
      } catch (error) {
          console.log(error);
          
          throw new HttpException('Error al obtener los productos',HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidosProducto`;
  }

  update(id: number, updatePedidosProductoDto: UpdatePedidosProductoDto) {
    return `This action updates a #${id} pedidosProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidosProducto`;
  }
}
