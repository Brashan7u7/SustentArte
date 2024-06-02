import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { compradoresEntity } from './entity/compradores.entity';
import { compradoresDto } from './dto/compradores.dto';
import { pagosEntity } from 'src/pagos/entity/pagos.entity';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import { usuariosEntity } from 'src/usuarios/entity/usuarios.entity';

@Injectable()
export class CompradoresService {
  constructor(private dataSource: DataSource) {}

  allCompradores() {
    try {
      return this.dataSource
        .getRepository(compradoresEntity)
        .find({ relations: ['pagos', 'pedidos', 'usuarios'] });
    } catch (error) {
      throw new HttpException(
        'No se pudo obtener los compradores',
        HttpStatus.CONFLICT,
      );
    }
  }
  async oneComprador(id: number) {
    try {
      return await this.dataSource
        .getRepository(compradoresEntity)
        .findOne({
          where: { id_Compradores: id },
          relations: ['pagos', 'pedidos', 'usuarios'],
        });
    } catch (error) {
      throw new HttpException(
        'No se pudo obtener el comprador',
        HttpStatus.CONFLICT,
      );
    }
  }
  async agregarComprador(newComprador: compradoresDto) {
    try {
      const baseComprador = await this.dataSource
        .getRepository(compradoresEntity)
        .create(newComprador);
      const pagosComprador = await this.dataSource
        .getRepository(pagosEntity)
        .findOne({ where: { id_Pago: newComprador.idPagos } });
      const pedidosComprador = await this.dataSource
        .getRepository(pedidosEntity)
        .findOne({ where: { id_pedidos: newComprador.idPedidos } });
      const usuariosComprador = await this.dataSource
        .getRepository(usuariosEntity)
        .findOne({ where: { id_usuario: newComprador.idUsuario } });

      baseComprador.pagos = pagosComprador;
      baseComprador.pedidos = pedidosComprador;
      baseComprador.usuarios = usuariosComprador;


      return await this.dataSource
        .getRepository(compradoresEntity)
        .save(baseComprador);
    } catch (error) {
      throw new HttpException(
        'No se pudo agregar el comprador',
        HttpStatus.CONFLICT,
      );
    }
  }

  async eliminarComprador(id: number) {
    try {
      const deleteComprador = await this.dataSource
        .getRepository(compradoresEntity)
        .findOne({ where: { id_Compradores: id } });
      return await this.dataSource
        .getRepository(compradoresEntity)
        .delete(deleteComprador);
    } catch (error) {
      throw new HttpException(
        'No se pudo eliminar el comprador',
        HttpStatus.CONFLICT,
      );
    }
  }
  async actualizarComprador(id: number, updateComprador: compradoresDto) {
    try {
      const updateCompradorObj = await this.dataSource
        .getRepository(compradoresEntity)
        .findOne({ where: { id_Compradores: id } });
      return await this.dataSource
        .getRepository(compradoresEntity)
        .update(updateCompradorObj, updateComprador);
    } catch (error) {
      throw new HttpException(
        'No se pudo actualizar el comprador',
        HttpStatus.CONFLICT,
      );
    }
  }
}
