import { categoriasEntity } from "src/categorias/entity/categorias.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('subcategorias')
export class subcategoriasEntity
{
    @PrimaryGeneratedColumn()
    id_subcategoria:number

    @Column()
    nombre_subCat:string

    @ManyToOne(()=>categoriasEntity,(cat)=>cat.subcategorias,{nullable:true})
    categoria:categoriasEntity
}