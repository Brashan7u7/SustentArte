import { productosEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class categoriasEntity
{

    @PrimaryGeneratedColumn()
    id_categoria:number

    @Column()
    nombreCat:string

    @OneToOne(()=>productosEntity,(prod)=>prod.categorias,{nullable:true})
    productos:productosEntity
    
}