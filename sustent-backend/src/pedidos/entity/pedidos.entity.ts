import { compradorEntity } from "src/compradores/entity/comprador.entity";
import { ProductoEntity } from "src/productos/entity/productos.entity";
import { SeguimientoEntity } from "src/seguimiento/entity/seguimiento.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class PedidosEntity {
    @PrimaryGeneratedColumn()
    id_pedido: number;

    @Column({type:'timestamp'})
    fecha_pedido: Date;

    @Column({type:'varchar'})
    numero_Pedido: string;

    @Column({type:'real'})
    precio_Total_Pedido: number;

    @Column({type:'integer'})
    edo_Pedido: number;

    @ManyToOne(()=>compradorEntity,(comprador)=>comprador.pedidos)
    comprador: compradorEntity;

    @OneToOne(()=>SeguimientoEntity,(seg)=>seg.pedidoId)
    seguimiento: SeguimientoEntity;

}