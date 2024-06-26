import { ProductoEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('materiales')
export class MaterialesEntity {

    @PrimaryGeneratedColumn()
    id_material: number;

    @Column({type:'varchar',length:100})
    nombre_material: string;

    @Column({type:'varchar',length:100})
    descripcion_material: string;
    
    @OneToMany(()=>ProductoEntity,(prod)=>prod.materiales,{nullable:true})
    producto: ProductoEntity[];
    
}