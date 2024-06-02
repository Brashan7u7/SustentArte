import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { pagosEntity } from './entity/pagos.entity';
import { PagosDto } from './dto/pagos.dto';
import { compradoresEntity } from 'src/compradores/entity/compradores.entity';

@Injectable()
export class PagosService {
  constructor(private dataSource: DataSource) {}

  async obtenerPagos() {
    try {
      return await this.dataSource
        .getRepository(pagosEntity)
        .find({ relations: ['compradores'] });
    } catch (error) {
      throw new HttpException('No se pudo obtener los pagos', HttpStatus.FOUND);
    }
  }

  async onePago(id: number) {
    try {
      return await this.dataSource
        .getRepository(pagosEntity)
        .findOne({ where: { id_Pago: id }, relations: ['compradores'] });
    } catch (error) {
      throw new HttpException('No se pudo obtener el pago', HttpStatus.FOUND);
    }
  }

  async crearPago(newpago: PagosDto) {
    try {
      const newPag = await this.dataSource
        .getRepository(pagosEntity)
        .create(newpago);
      const compradorFind = await this.dataSource
        .getRepository(compradoresEntity)
        .findOne({ where: { id_Compradores: newpago.id_Compradores } });
      newPag.compradores = compradorFind;
      const createPago = await this.dataSource
        .getRepository(pagosEntity)
        .save(newPag);
      compradorFind.pagos=newPag;

      await this.dataSource
        .getRepository(compradoresEntity)
        .save(compradorFind);

      return createPago;
    } catch (error) {
      throw new HttpException('No se pudo crear el pago', HttpStatus.CREATED);
    }
  }

  async updatePago(id: number, updatePago: PagosDto) {
    try {
      const pagofind = await this.dataSource
        .getRepository(pagosEntity)
        .findOne({ where: { id_Pago: id } });

      return await this.dataSource
        .getRepository(pagosEntity)
        .update(pagofind, updatePago);
    } catch (error) {
      throw new HttpException(
        'No se pudo actualizar el pago',
        HttpStatus.FOUND,
      );
    }
  }

  async eliminarPago(id: number) {
    try {
      const pagofind = await this.dataSource
        .getRepository(pagosEntity)
        .findOne({ where: { id_Pago: id } });

      return this.dataSource.getRepository(pagosEntity).delete(pagofind);
    } catch (error) {
      throw new HttpException('No se pudo elimar el pago', HttpStatus.FOUND);
    }
  }
}
