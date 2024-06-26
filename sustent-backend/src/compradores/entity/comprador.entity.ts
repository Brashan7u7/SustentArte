import { PagosEntity } from "src/pagos/entity/pagos.entity";
import { PedidosEntity } from "src/pedidos/entity/pedidos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('comprador')
export class compradorEntity
{

    @PrimaryGeneratedColumn()
    id_comprador: number;

    @Column({type:'varchar'})
    correo:string;

    @Column({type:'varchar'})
    password:string;

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

    @OneToMany(()=>PagosEntity,(pagos)=>pagos.comprador,{nullable:true})
    pagos: PagosEntity[];

    @OneToMany(()=>PedidosEntity,(pedidos)=>pedidos.comprador,{nullable:true})
    pedidos: PedidosEntity[];
    
}