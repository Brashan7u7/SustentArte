import { compradoresEntity } from "src/compradores/entity/compradores.entity";
import { productosEntity } from "src/productos/entity/productos.entity";
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
    
    @ManyToOne(()=> compradoresEntity,(compra)=>compra.pedidos,{nullable:true})
    compradores:compradoresEntity

    @OneToMany(()=> productosEntity,(prod)=>prod.pedidos,{nullable:true})
    productos:productosEntity[]

    @OneToOne(()=> seguimientosEntity,(seg)=>seg.pedidos,{nullable:true})
    seguimientos:seguimientosEntity[]
}