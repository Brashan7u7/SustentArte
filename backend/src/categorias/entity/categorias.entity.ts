import { subcategoriasEntity } from "src/subcategorias/entity/subcategorias.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class categoriasEntity
{

    @PrimaryGeneratedColumn()
    id_categoria:number

    @Column()
    nombreCat:string

    @OneToMany(()=>subcategoriasEntity,(subcat)=>subcat.categoria,{nullable:true})
    subcategorias:subcategoriasEntity[]
    
}