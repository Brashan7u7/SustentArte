import { productosEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class categoriasEntity
{

    @PrimaryGeneratedColumn()
    id_categoria:number

    @Column({type:'varchar'})
    nombreCat:string

    @OneToOne(()=>productosEntity,(prod)=>prod.categorias,{nullable:true})
    @JoinColumn()
    productos:productosEntity
    
}