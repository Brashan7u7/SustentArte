import { PagosEntity } from "src/pagos/entity/pagos.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('detalle_pago')
export class DetallePagoEntity {
    
    @PrimaryGeneratedColumn()
    id_detalle: number;

    @Column({type:'varchar',length:100})
    nombreTitular: string;

    @Column({type:'varchar',length:50})
    numTarjeta: string;

    @Column({type:'varchar',length:10})
    fechaVencimiento: string;

    @Column({type:'varchar',length:10})
    anoVencimiento: string;

    @Column({type:'varchar',length:3})
    cvv: string;

    @Column({type:'varchar',length:50})
    tipoTarjeta: string;

    @Column({type:'varchar',length:50,nullable:true})
    compania: string;
    @Column({type:'real',nullable:true})
    pagoId:number

}