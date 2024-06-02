import { compradorEntity } from "src/compradores/entity/comprador.entity";
import { DetallePagoEntity } from "src/detalle-pago/entity/detallePago.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagos')
export class PagosEntity {

    @PrimaryGeneratedColumn()
    id_pago: number;

    @Column({type:'date',default:()=> 'CURRENT_TIMESTAMP'})
    fecha_pago: Date;

    @Column({type:'real'})
    monto_pago: number;

    @Column({type:'varchar',length:50})
    metodo_pago: string;

    @Column({type:'varchar',length:50})
    num_transaccion: string;

    @Column({type:'varchar',length:50})
    edo_pago: string;

    @OneToOne(()=>DetallePagoEntity,(detail)=>detail.pagoId,{onDelete:'CASCADE'})
    @JoinColumn({name:'id_detalle'})
    detalle: DetallePagoEntity;

    @ManyToOne(()=>compradorEntity,(comprador)=>comprador.pagos)
    comprador: compradorEntity;

    
}