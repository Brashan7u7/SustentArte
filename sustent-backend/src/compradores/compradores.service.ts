import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { compradorEntity } from './entity/comprador.entity';
import { CompradorDto } from './dto/comprador.dto';
import { usuarioEntity } from 'src/usuario/entity/usuario.entity';

@Injectable()
export class CompradoresService {

    constructor(private dataSorce:DataSource) {
    }

    async getCompradores()
    {
        try {

            const compradores = await this.dataSorce.getRepository(compradorEntity).find({relations:['usuario','pagos']});
            if(!compradores)
                {
                    return new HttpException("No se encontraron compradores",HttpStatus.NOT_FOUND)
                }
            return compradores;
        } catch (error) {
            throw new HttpException("Error al obtener los compradores",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async getComprador(id:number)
    {
        try {

            const compradorFind = await this.dataSorce.getRepository(compradorEntity).findOne({where:{id_comprador:id},relations:['usuario']});

            if(!compradorFind)
                {
                    return new HttpException("No se encontro el comprador",HttpStatus.NOT_FOUND)
                }

            return compradorFind;
            
        } catch (error) {
            throw new HttpException("Error al obtener el comprador",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createComprador(compradorb:CompradorDto)
    {
        try {

            const compradorBody = await this.dataSorce.getRepository(compradorEntity).create(compradorb);

            const usuarioFind = await this.dataSorce.getRepository(usuarioEntity).findOne({where:{id_usuario:compradorb.usuarioId}})

            if(!usuarioFind)
                {
                    return new HttpException("No se encontro el usuario",HttpStatus.NOT_FOUND)
                }

            

            compradorBody.usuario = usuarioFind;

            const saveusuario = await this.dataSorce.getRepository(compradorEntity).save(compradorBody);

            usuarioFind.compradorId = saveusuario.id_comprador

            await this.dataSorce.getRepository(usuarioEntity).save(usuarioFind);

            return saveusuario

        } catch (error) {
            throw new HttpException("Error al crear el comprador",HttpStatus.INTERNAL_SERVER_ERROR)

        }
    }

    async deleteComprador(id:number)
    {
        try {
            const compradorFind = await this.dataSorce.getRepository(compradorEntity).findOne({where:{id_comprador:id}});

            if(!compradorFind)
                {
                    return new HttpException("No se encontro el comprador",HttpStatus.NOT_FOUND)
                }

            return await this.dataSorce.getRepository(compradorEntity).remove(compradorFind);
        } catch (error) {
            throw new HttpException("Error al eliminar el comprador",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
