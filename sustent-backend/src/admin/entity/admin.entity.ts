import { ProductoEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')
export class AdminEntity
{
    @PrimaryGeneratedColumn()
    id_Admin: number;

    @Column({type:'varchar', length:80})
    nombre: string;

    @Column({type:'varchar',length:80})
    email: string;

    @Column({type:'varchar', length:100})
    password: string;

}