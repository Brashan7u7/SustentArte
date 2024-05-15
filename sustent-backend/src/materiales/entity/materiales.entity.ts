import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiales')
export class MaterialesEntity {

    @PrimaryGeneratedColumn()
    id_material: number;

    @Column({type:'varchar',length:100})
    nombre_material: string;

    @Column({type:'varchar',length:100})
    descripcion_material: string;
    
}