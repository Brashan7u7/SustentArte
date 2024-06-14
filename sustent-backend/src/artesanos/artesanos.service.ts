import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { artesanosDto } from './dto/artesanosLogin.dto';
import { artesanosEntity } from './entity/artesanos.entity';

@Injectable()
export class ArtesanosService {

    constructor(private dataSouce:DataSource) { }


    async getArtesanos()
    {
        try {
            const artesanos = await this.dataSouce.getRepository(artesanosEntity).find();
            if (!artesanos) {
                return new HttpException('No se encontraron artesanos',HttpStatus.NOT_FOUND);
            }

            return artesanos;
        } catch (error) {
            //console.log(error);
            
            throw new HttpException('Error al obtener los artesanos',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getArtesano(id:number)
    {
        try {
            const artesanoFind = await this.dataSouce.getRepository(artesanosEntity).findOne({where:{id_artesano:id}});
            if (!artesanoFind) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            return artesanoFind;
        } catch (error) {
            throw new HttpException('Error al obtener el artesano',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createArtesano(artesano:artesanosDto)
    {
        try {
            const artesanoBody = await this.dataSouce.getRepository(artesanosEntity).create(artesano);

            artesanoBody.password = await this.encryptPassword(artesano.password);

            const saveArtesano = await this.dataSouce.getRepository(artesanosEntity).save(artesanoBody);

            return saveArtesano;
        } catch (error) {
            throw new HttpException('Error al crear el artesano',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateArtesano(id:number,artesano:artesanosDto)
    {
        try {
            
            const artesanoFind = await this.dataSouce.getRepository(artesanosEntity).findOne({where:{id_artesano:id}});

            if (!artesanoFind) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            return await this.dataSouce.getRepository(artesanosEntity).update({id_artesano:artesanoFind.id_artesano},artesano);
        } catch (error) {
            throw new HttpException('Error al actualizar el artesano',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteArtesano(id:number)
    {
        try {
            const artesanoFind = await this.dataSouce.getRepository(artesanosEntity).findOne({where:{id_artesano:id}});

            if (!artesanoFind) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            return await this.dataSouce.getRepository(artesanosEntity).remove(artesanoFind)
        } catch (error) {
            throw new HttpException('Error al eliminar el artesano',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async encryptPassword(password: string): Promise<string> {
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async loginArtesano(correo: string, password: string) {
        try {
            const artesanoFind = await this.dataSouce.getRepository(artesanosEntity).findOne({where:{correo:correo}});
            if (!artesanoFind) {
                return new HttpException('No se encontro el artesano',HttpStatus.NOT_FOUND);
            }

            const bcrypt = require('bcrypt');

            const validPassword = await bcrypt.compare(password,artesanoFind.password);
            if (!validPassword) {
                return false;
            }

            return artesanoFind;
        } catch (error) {
            throw new HttpException('Error al iniciar sesion',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
