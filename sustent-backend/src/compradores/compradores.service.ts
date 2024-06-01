import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { compradorEntity } from './entity/comprador.entity';
import { CompradorDto } from './dto/comprador.dto';

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


            const passwordEncrypted = await this.encryptPassword(compradorb.password);

            compradorBody.password = passwordEncrypted;


            const savecomprador= await this.dataSorce.getRepository(compradorEntity).save(compradorBody);


            return savecomprador

        } catch (error) {
            console.log(error);
            
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

    async encryptPassword(password: string): Promise<string> {
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async loginComprador(correo: string, password: string) {

        try {

            const compradorFind = await this.dataSorce.getRepository(compradorEntity).findOne({where:{correo:correo}});

            if(!compradorFind)
                {
                    return new HttpException("No se encontro el comprador",HttpStatus.NOT_FOUND)
                }

            const bcrypt = require('bcrypt');

            const validPassword = await bcrypt.compare(password, compradorFind.password);

            if(!validPassword)
                {
                    return false
                }

            return true;
            
        } catch (error) {
            throw new HttpException("Error al iniciar sesion",HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
