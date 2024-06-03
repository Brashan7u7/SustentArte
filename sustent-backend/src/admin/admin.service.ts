import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AdminEntity } from './entity/admin.entity';
import { adminDto } from './dto/admin.dto';

@Injectable()
export class AdminService {

    private readonly logger = new Logger(AdminService.name);


    constructor(private dataSource:DataSource){}

    async getAdmins(){
        try{
            const admins = await this.dataSource.getRepository(AdminEntity).find()
            if(!admins){
                return new HttpException('No se encuentran admins', HttpStatus.NOT_FOUND);
            }
            return admins;
        }catch(error){
            console.log(error);
            throw new HttpException('Error al obtener los admins',  HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAdmin(id:number)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_Admin:id}});
            if (!adminFind) {
                return new HttpException('No se encontro el admin',HttpStatus.NOT_FOUND);
            }

            return adminFind;
        } catch (error) {
            throw new HttpException('Error al obtener el admin',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async createAdmin(admin:adminDto)
    {
        try {
            const adminBody = await this.dataSource.getRepository(AdminEntity).create(admin);

            
            

            const saveAdmin = await this.dataSource.getRepository(AdminEntity).save(adminBody);

            return saveAdmin;
        } catch (error) {
            throw new HttpException('Error al crear el admin',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateAdmin(id:number,admin:adminDto)
    {
        try {
            
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_Admin:id}});

            if (!adminFind) {
                return new HttpException('No se encontro el admin',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(AdminEntity).update({id_Admin:adminFind.id_Admin},admin);
        } catch (error) {
            throw new HttpException('Error al actualizar el admin',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteadmin(id:number)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_Admin:id}});

            if (!adminFind) {
                return new HttpException('No se encontro el admin',HttpStatus.NOT_FOUND);
            }

            return await this.dataSource.getRepository(AdminEntity).remove(adminFind)
        } catch (error) {
            throw new HttpException('Error al eliminar el admin',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async crearPrimerUsuario() {
        const usuario =
          await this.dataSource.getRepository(AdminEntity).findOne({where:{email:'super@dominio.com'}});
        if (!usuario) {
          this.logger.verbose('Creating the first user');
          const usuarioCreado = await this.dataSource.getRepository(AdminEntity).save({
            nombre: 'Super Usuario',
            email: 'super@dominio.com',
            password: '123456',
          });
          this.logger.verbose('First user created: ' + usuarioCreado.email);
        }
      }
}
