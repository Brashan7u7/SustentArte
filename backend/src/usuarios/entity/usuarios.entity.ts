import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class usuariosEntity
{

    @PrimaryGeneratedColumn()
    id_usuario:number

    @Column({type:'varchar',length:20})
    nombre:string

    @Column({type:'varchar',length:20})
    apellidoPat:string

    @Column({type:'varchar',length:20})
    apellidoMat:string

    @Column({type:'varchar',length:30,unique:true})
    correo:string

    @Column({type:'varchar',length:20})
    telefono:string

    @Column({type:'varchar',length:50})
    ciudad:string

    @Column({type:'varchar',length:50})
    estado:string

    @Column({type:'varchar',length:12})
    cp:string

    @Column({type:'varchar',length:100})
    calle:string

    @Column({type:'varchar',length:10})
    numCasa:string

}