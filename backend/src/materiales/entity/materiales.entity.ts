import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiales')
export class materialesEntity
{
    @PrimaryGeneratedColumn()
    id_Material:number

    @Column({type:'varchar',length:30})
    nombre_Mat:string

    @Column({type:'varchar',length:60})
    desc_Mat:string
}