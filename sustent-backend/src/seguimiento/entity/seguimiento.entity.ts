import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('seguimiento')
export class SeguimientoEntity {

    @PrimaryGeneratedColumn()
    id_seguimiento: number;
}