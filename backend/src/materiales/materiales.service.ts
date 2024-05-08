import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { materialesEntity } from './entity/materiales.entity';
import { MaterialesDto } from './dto/materiales.dto';
import { productosEntity } from 'src/productos/entity/productos.entity';

@Injectable()
export class MaterialesService {

  constructor(private dataSource:DataSource){}

  allMateriales(){
    try{
      return this.dataSource.getRepository(materialesEntity).find({relations:['productos']})

    }catch(error){
      throw new HttpException("No se pudo conectar", HttpStatus.CONFLICT);
    }
  }

  async oneMaterial(id:number){
    try {
      return await this.dataSource.getRepository(materialesEntity).findOne({where:{id_Material:id},relations:['productos']})
    } catch (error) {
      throw new HttpException("No se pudo encontrar el usuario",HttpStatus.CONFLICT)
    }
  }

  async agregarMaterial(newMaterial: MaterialesDto){
    try{

      const baseMaterial = await this.dataSource.getRepository(materialesEntity).create(newMaterial);
      const productoMaterial = await this.dataSource.getRepository(productosEntity).findOne({ where: { id_Producto: newMaterial.id_Producto } });

      baseMaterial.productos = productoMaterial;

      return await this.dataSource.getRepository(materialesEntity).save(baseMaterial);
    }catch(error){
      throw new HttpException("No se pudo agregar el material", HttpStatus.CREATED);
    }
  }

  async eliminarMaterial(id:number){
    try {
      const deleteMaterial= await this.dataSource.getRepository(materialesEntity).findOne({where:{id_Material:id}})
      return await this.dataSource.getRepository(materialesEntity).delete(deleteMaterial)
    } catch (error) {
      throw new HttpException("No se pudo eliminar el material",HttpStatus.CONFLICT)
    }
  }

  async actualizarMaterial(id:number,updatMaterial:MaterialesDto){
    try{
      const updateMaterial = await this.dataSource.getRepository(materialesEntity).findOne({where:{id_Material:id}})
      return await this.dataSource.getRepository(materialesEntity).update(updateMaterial,updatMaterial)
    }catch (error){
      throw new HttpException("No se pudo actualizar el material",HttpStatus.CONFLICT)
    }
  }
}
