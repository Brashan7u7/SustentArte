import { usuarioEntity } from "src/usuario/entity/usuario.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('artesanos')
export class artesanosEntity
{
    @PrimaryGeneratedColumn()
    id_artesano: number;

    @Column({type:'varchar'})
    descripcionTrabajo: string;

    @Column({type:'varchar'})
    user: string;

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

    @OneToOne(()=>usuarioEntity,(usu)=>usu.artesanoId,{nullable:true})
    @JoinColumn({name:'usuarioId'})
    usuario:usuarioEntity;
}