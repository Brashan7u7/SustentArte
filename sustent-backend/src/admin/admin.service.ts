import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AdminEntity } from './entity/admin.entity';
import { adminDto } from './dto/admin.dto';
import { AdminLoginDto } from './dto/adminLogin.dto';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { compradorEntity } from 'src/compradores/entity/comprador.entity';

@Injectable()
export class AdminService {

    private readonly logger = new Logger(AdminService.name);


    constructor(private dataSource:DataSource){}

    async getAdmins(){
        try{
            const admins = await this.dataSource.getRepository(AdminEntity).find({select:['id_Admin','nombre','email']})
            if(!admins){
                return new HttpException('No se encuentran admins', HttpStatus.NOT_FOUND);
            }
            return admins;
        }catch(error){
            //console.log(error);
            throw new HttpException('Error al obtener los admins',  HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAdmin(id:number)
    {
        try {
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{id_Admin:id},select:['id_Admin','nombre','email']});
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

            
            adminBody.password = await this.encryptPassword(admin.password);

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

    async encryptPassword(password: string): Promise<string> {
        const bcrypt = require('bcrypt');
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async loginAdmin(bodyLogin:AdminLoginDto)
    {
        try {
            const bcrypt = require('bcrypt');
            const adminFind = await this.dataSource.getRepository(AdminEntity).findOne({where:{email:bodyLogin.email}});
            if (adminFind) {
                const validatePassword:boolean = await bcrypt.compare(bodyLogin.password,adminFind.password);
                if (!validatePassword) {
                    return new HttpException('Contraseña incorrecta',HttpStatus.UNAUTHORIZED);
                }
                return {adminFind,rol:'admin'};
            }
            const artesanoFind = await this.dataSource.getRepository(artesanosEntity).findOne({where:{correo:bodyLogin.email}});
            
            if (artesanoFind) {
                const validatePassword:boolean = await bcrypt.compare(bodyLogin.password,artesanoFind.password);
                if (!validatePassword) {
                    return new HttpException('Contraseña incorrecta',HttpStatus.UNAUTHORIZED);
                }
                return {artesanoFind,rol:'artesano'};
            }
            const compradorFind = await this.dataSource.getRepository(compradorEntity).findOne({where:{correo:bodyLogin.email}});
            //console.log(compradorFind);
            
            if (compradorFind) {
                const validatePassword:boolean = await bcrypt.compare(bodyLogin.password,compradorFind.password);
                //console.log(validatePassword);
                
                if (!validatePassword) {
                    return new HttpException('Contraseña incorrecta',HttpStatus.UNAUTHORIZED);
                }
                return {compradorFind,rol:'comprador'};
            }
            
        } catch (error) {
            throw new HttpException('Error al loguear el admin',HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async crearPrimerUsuario() {

        const usuario =
          await this.dataSource.getRepository(AdminEntity).findOne({where:{email:'super@dominio.com'}});
        if (!usuario) {
          this.logger.verbose('Creating the first user');
          const passwordN = '123456';
          const passwordEncriptada = await this.encryptPassword(passwordN);
          const usuarioCreado = await this.dataSource.getRepository(AdminEntity).save({
            nombre: 'Super Usuario',
            email: 'super@dominio.com',
            password: passwordEncriptada,
          });
          this.logger.verbose('First user created: ' + usuarioCreado.email);
        }
    }
}
