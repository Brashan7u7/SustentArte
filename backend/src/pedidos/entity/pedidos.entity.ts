import { compradoresEntity } from "src/compradores/entity/compradores.entity";
import { productosEntity } from "src/productos/entity/productos.entity";
import { seguimientosEntity } from "src/seguimientos/entity/seguimientos.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class pedidosEntity
{
    @PrimaryGeneratedColumn()
    id_pedidos:number

    @Column({type:'date'})
    fecha_pedido:Date

    @Column({type:'varchar'})
    numero_pedido:string

    @Column({type:'varchar'})
    lista_prod:string

    @Column({type:'real'})
    precio_total_ped:number
    
    @ManyToOne(()=> compradoresEntity,(compra)=>compra.pedidos,{nullable:true})
    compradores:compradoresEntity

    @OneToMany(()=> productosEntity,(prod)=>prod.pedidos,{nullable:true})
    productos:productosEntity[]

    @OneToOne(()=> seguimientosEntity,(seg)=>seg.pedidos,{nullable:true})
    seguimientos:seguimientosEntity[]
}