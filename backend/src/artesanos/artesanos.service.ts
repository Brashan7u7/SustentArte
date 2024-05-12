import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { artesanosEntity } from './entity/artesanos.entity';
import { artesanosDto } from './dto/artesanos.dto';
import { productosEntity } from 'src/productos/entity/productos.entity';
import { usuariosEntity } from '../usuarios/entity/usuarios.entity';

@Injectable()
export class ArtesanosService {
  constructor(private datasource: DataSource) {}

  obtenerArtesanos() {
    try {
      return this.datasource.manager
        .getRepository(artesanosEntity)
        .find({ relations: ['productos', 'usuarios'] });
    } catch (error) {
      throw new HttpException(
        'No se pudo obtener los artesanos',
        HttpStatus.FOUND,
      );
    }
  }

  async unArtesano(id: number) {
    try {
      return this.datasource
        .getRepository(artesanosEntity)
        .findOne({
          where: { id_Artesano: id },
          relations: ['productos', 'usuarios'],
        });
    } catch (error) {
      throw new HttpException('No se pudo conectar', HttpStatus.CONFLICT);
    }
  }

  async crearArtesano(createartesano: artesanosDto) {
    try {
      const newArtesano = await this.datasource
        .getRepository(artesanosEntity)
        .create(createartesano);
      const findProductos = await this.datasource
        .getRepository(productosEntity)
        .findOne({ where: { id_Producto: createartesano.productosId } });
      const findUsuarios = await this.datasource
        .getRepository(usuariosEntity)
        .findOne({ where: { id_usuario: createartesano.usuariosId } });

      newArtesano.productos.push(findProductos);
      newArtesano.usuarios = findUsuarios;

      const createArtesano = await this.datasource
        .getRepository(artesanosEntity)
        .save(newArtesano);
      return createArtesano;
    } catch (error) {
      throw new HttpException(
        'No se pudo crear el artesano',
        HttpStatus.CONFLICT,
      );
    }
  }

  async actualizarArtesanos(id: number, artesanosDto: artesanosDto) {
    try {
      const artesanoActualizado = await this.datasource
        .getRepository(artesanosEntity)
        .findOne({
          where: { id_Artesano: id },
          relations: ['productos', 'usuarios'],
        });
      return await this.datasource
        .getRepository(artesanosEntity)
        .update(artesanoActualizado, artesanosDto);
    } catch (error) {
      throw new HttpException(
        'No se pudo actualizar el artesano',
        HttpStatus.CONFLICT,
      );
    }
  }
  async eliminarArtesano(id: number) {
    try {
      const artesanoEliminado = await this.datasource
        .getRepository(artesanosEntity)
        .findOne({
          where: { id_Artesano: id },
          relations: ['productos', 'usuarios'],
        });
      return await this.datasource
        .getRepository(artesanosEntity)
        .delete(artesanoEliminado);
    } catch (error) {
      throw new HttpException(
        'No se pudo eliminar el artesano',
        HttpStatus.CONFLICT,
      );
    }
  }
}
