
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('detalle_pago')
export class DetallePagoEntity {
    
    @PrimaryGeneratedColumn()
    id_detalle: number;

    @Column({type:'varchar',length:50})
    numTarjeta: string;

    @Column({type:'varchar',length:10})
    fechaVencimiento: string;

    @Column({type:'real',nullable:true})
    pagoId:number

}