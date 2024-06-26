import { ProductoEntity } from "src/productos/entity/productos.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('artesanos')
export class artesanosEntity
{
    @PrimaryGeneratedColumn()
    id_artesano: number;

    @Column({type:'varchar'})
    descripcionTrabajo: string;

    @Column({type:'varchar'})
    correo: string;

    @Column({type:'varchar'})
    password: string;

    @Column({type:'varchar',nullable:true})
    xp_textil:string;

    @Column({type:'varchar',nullable:true})
    tec_artesanales:string

    @Column({type:'varchar',nullable:true})
    reconocimientos:string;

    @Column({type:'varchar',nullable:true})
    foto:string;

    @Column({type:'varchar',length:100})
    nombre:string;

    @Column({type:'varchar',length:100})
    apellidoPaterno:string;

    @Column({type:'varchar',length:100})
    apellidoMaterno:string;

    @Column({type:'varchar',length:100})
    localidad:string;

    @OneToMany(()=>ProductoEntity,(prod)=>prod.artesano,{nullable:true})
    productos: ProductoEntity[];
}