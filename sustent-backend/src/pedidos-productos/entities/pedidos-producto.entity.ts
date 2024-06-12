import { PedidosEntity } from "src/pedidos/entity/pedidos.entity";
import { ProductoEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos_productos')
export class PedidosProductoEntity {

    @PrimaryGeneratedColumn()
    id_pedido_producto: number;

    @Column({type:'integer',nullable:true})
    idComprador: number;

    @ManyToOne(()=>ProductoEntity,(prod)=>prod.pedidosProd,{nullable:true})
    productos: ProductoEntity;

    @ManyToOne(()=>PedidosEntity,(ped)=>ped.productos,{nullable:true})
    pedidos: PedidosEntity;
    
}