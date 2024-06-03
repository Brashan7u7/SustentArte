import { artesanosEntity } from "src/artesanos/entity/artesanos.entity";
import { CategoriasEntity } from "src/categorias/entity/categorias.entity";
import { MaterialesEntity } from "src/materiales/entity/materiales.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    id_producto: number;

    @Column({type:'varchar'})
    nombreP: string;

    @Column({type:'varchar'})
    descripcion: string;

    @Column({type:'real'})
    precio_Venta: number;

    @Column({type:'integer'})
    stock: number;

    @Column({type:'varchar'})
    historia: string;

    @OneToMany(()=>MaterialesEntity,(mat)=>mat.producto,{nullable:true})
    materiales: MaterialesEntity[];

    @ManyToOne(()=>CategoriasEntity,(cat)=>cat.productos,{nullable:true})
    categoria: CategoriasEntity;

    @ManyToOne(()=>artesanosEntity,(artesano)=>artesano.productos,{nullable:true})
    artesano: artesanosEntity;
}