import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class categoriasEntity
{

    @PrimaryGeneratedColumn()
    id_categoria:number

    @Column()
    nombreCat:string
    
}