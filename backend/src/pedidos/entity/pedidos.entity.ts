import { seguimientosEntity } from "src/seguimientos/entity/seguimientos.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class pedidosEntity
{
    @PrimaryGeneratedColumn()
    id_pedidos:number

    @Column()
    fecha_pedido:Date

    @Column()
    numero_pedido:string

    @Column()
    lista_prod:string

    @Column()
    precio_total_ped:number
    
    @ManyToOne(()=> compradoresEntity,(compra)=>compra.pedidos)
    compradores:compradoresEntity

    @OneToMany(()=> productosEntity,(prod)=>prod.pedidos)
    productos:productosEntity[]

    @OneToOne(()=> seguimientosEntity,(seg)=>seg.pedidos)
    seguimientos:seguimientosEntity
}