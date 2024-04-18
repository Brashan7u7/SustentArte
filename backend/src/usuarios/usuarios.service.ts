import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { usuariosEntity } from './entity/usuarios.entity';
import { usuariosDto } from './dto/usuariosCrear.dto';
import { compradoresEntity } from 'src/compradores/entity/compradores.entity';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';

@Injectable()
export class UsuariosService {

    constructor(private dataSource:DataSource)
    {

    }

    allUsuarios()
    {
        try {
            return this.dataSource.getRepository(usuariosEntity).find({relations:['compradores','artesanos']})
        } catch (error) {
            throw new HttpException("No se pudo conectar",HttpStatus.CONFLICT)
        }
    }

    async oneUsuario(id:number)
    {
        try {
            return await this.dataSource.getRepository(usuariosEntity).findOne({where:{id_usuario:id},relations:['compradores','artesanos']})
        } catch (error) {
            throw new HttpException("No se pudo encontrar el usuario",HttpStatus.CONFLICT)
        }
    }

    async agregarUsuario(newUser:usuariosDto)
    {
        try {
            const baseUser = await this.dataSource.getRepository(usuariosEntity).create(newUser)
            const compradorUser = await this.dataSource.getRepository(compradoresEntity).findOne({where:{id_Compradores:newUser.idCompradores}})
            const artesanoUser = await this.dataSource.getRepository(artesanosEntity).findOne({where:{id_Artesano:newUser.idArtesanos}})

            baseUser.compradores = compradorUser
            baseUser.artesanos = artesanoUser

            return await this.dataSource.getRepository(usuariosEntity).save(baseUser)
        } catch (error) {
            throw new HttpException("No se pudo agregar el usuario",HttpStatus.CREATED)
        }
    }

    async eliminarUsuario(id:number)
    {
        try {
            const deleteUser= await this.dataSource.getRepository(usuariosEntity).findOne({where:{id_usuario:id}})
            return await this.dataSource.getRepository(usuariosEntity).delete(deleteUser)
        } catch (error) {
            throw new HttpException("No se pudo eliminar el usuario",HttpStatus.CONFLICT)
        }
    }

    async actualizarUsuario(id:number,updatUsu:usuariosDto)
    {
        try {
            const updateUser= await this.dataSource.getRepository(usuariosEntity).findOne({where:{id_usuario:id}})
            return await this.dataSource.getRepository(usuariosEntity).update(updateUser,updatUsu)
        } catch (error) {
            throw new HttpException("No se pudo actualizar el usuario",HttpStatus.CONFLICT)
        }
    }
}
