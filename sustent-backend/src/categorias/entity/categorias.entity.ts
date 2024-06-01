import { ProductoEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('categorias')
export class CategoriasEntity {

    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column({type:'varchar',length:100})
    nombre_categoria: string;

    @Column({type:'boolean'})
    matCategoria: boolean;

    @OneToMany(()=>ProductoEntity,(prod)=>prod.categoria)
    productos: ProductoEntity[];
    
}