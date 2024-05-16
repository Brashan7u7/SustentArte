import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class usuarioEntity
{
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({type:'varchar',length:100})
    nombre:string;

    @Column({type:'varchar',length:100})
    apellidoPaterno:string;

    @Column({type:'varchar',length:100})
    apellidoMaterno:string;

    @Column({type:'varchar',length:20})
    telefono:string;

    @Column({type:'varchar',length:50})
    ciudad:string;

    @Column({type:'varchar',length:50})
    estado:string;

    @Column({type:'varchar',length:12})
    cp:string;

    @Column({type:'varchar',length:100})
    calle:string;

    @Column({type:'varchar',length:100})
    colonia:string;

    @Column({type:'varchar',length:10})
    numCasa:string;

    @Column({type:'integer',nullable:true})
    compradorId: number;
}