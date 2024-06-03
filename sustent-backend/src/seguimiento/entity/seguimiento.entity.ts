import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('seguimiento')
export class SeguimientoEntity {

    @PrimaryGeneratedColumn()
    id_seguimiento: number;

    @Column({type:'varchar',nullable:true})
    num_Guia:string;

    @Column({type:'varchar',nullable:true})
    empresa_Transporte:string;

    @Column({type:'varchar',nullable:true})
    edo_Envio:string;

    @Column({type:'integer'})
    pedidoId:number;
    
}