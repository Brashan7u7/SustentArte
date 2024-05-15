import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { usuarioEntity } from './entity/usuario.entity';
import { usuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(private dataSorce: DataSource) { }

    async getUsuarios() {
        try {
            const usuarios = await this.dataSorce.getRepository(usuarioEntity).find();
            if (!usuarios) {
                return new HttpException(
                    'No se encontraron usuarios',
                    HttpStatus.NOT_FOUND,
                );
            }
            return usuarios;
        } catch (error) {
            throw new HttpException(
                'Error al obtener los usuarios',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async getUsuario(id: number) {
        try {
            const usuarioFind = await this.dataSorce
                .getRepository(usuarioEntity)
                .findOne({ where: { id_usuario: id } });
            if (!usuarioFind) {
                return new HttpException(
                    'No se encontro el usuario',
                    HttpStatus.NOT_FOUND,
                );
            }

            return usuarioFind;
        } catch (error) {
            throw new HttpException(
                'Error al obtener el usuario',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async createUsuario(usuario: usuarioDto) {
        try {
            const usuarioBody = await this.dataSorce
                .getRepository(usuarioEntity)
                .create(usuario);

            const saveusuario = await this.dataSorce
                .getRepository(usuarioEntity)
                .save(usuarioBody);

            return saveusuario;
        } catch (error) {
            throw new HttpException(
                'Error al crear el usuario',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async updateUsuario(id: number, usuario: usuarioDto) {
        try {
            const usuarioFind = await this.dataSorce
                .getRepository(usuarioEntity)
                .findOne({ where: { id_usuario: id } });
            if (!usuarioFind) {
                throw new HttpException(
                    'No se encontro el usuario',
                    HttpStatus.NOT_FOUND,
                );
            }

            return await this.dataSorce
                .getRepository(usuarioEntity)
                .update(usuarioFind, usuario);
        } catch (error) {
            throw new HttpException(
                'Error al actualizar el usuario',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    async deleteUsuario(id: number) {
        try {
            const usuarioFind = await this.dataSorce
                .getRepository(usuarioEntity)
                .findOne({ where: { id_usuario: id } });
            if (!usuarioFind) {
                return new HttpException(
                    'No se encontro el usuario',
                    HttpStatus.NOT_FOUND,
                );
            }
            
            const deleteUsu = await this.dataSorce
                .getRepository(usuarioEntity)
                .remove(usuarioFind);
            return deleteUsu;
        } catch (error) {
            throw new HttpException(
                'Error al eliminar el usuario',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
