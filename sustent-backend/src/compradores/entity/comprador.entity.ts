import { PagosEntity } from "src/pagos/entity/pagos.entity";
import { usuarioEntity } from "src/usuario/entity/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comprador')
export class compradorEntity
{

    @PrimaryGeneratedColumn()
    id_comprador: number;

    @OneToOne(()=>usuarioEntity,(usu)=>usu.compradorId,{nullable:true})
    @JoinColumn({name:'usuarioId'})
    usuario: usuarioEntity;

    @Column({type:'varchar'})
    correo:string;

    @Column({type:'varchar'})
    password:string;

    @OneToMany(()=>PagosEntity,(pagos)=>pagos.comprador,{nullable:true})
    pagos: PagosEntity[];
    
}