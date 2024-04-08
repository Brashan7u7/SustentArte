import { pedidosEntity } from "src/pedidos/entity/pedidos.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('seguimientos')
export class seguimientosEntity
{
    @PrimaryGeneratedColumn()
    id_seguimientos:number

    @OneToOne(()=>pedidosEntity,(pedidos)=>pedidos.seguimientos)
    pedidos:pedidosEntity

    @Column({type:'varchar',length:30})
    num_guia:string

    @Column({type:'varchar',length:100})
    empre_transp:string

    @Column({type:'integer'})
    edo_Envio:number
}