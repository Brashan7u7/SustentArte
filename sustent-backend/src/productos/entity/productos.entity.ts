import { pedidosEntity } from './../../pedidos/entity/pedidos.entity';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { materialesEntity } from 'src/materiales/entity/materiales.entity';

import {
  Column,
  Double,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productos')
export class productosEntity {


  @PrimaryGeneratedColumn()
  id_Producto: number;

  @Column({type:'varchar',length:30, nullable:true})
  nombreP:string;

  @Column({type:'varchar',length:60, nullable:true})
  descripcion :string;

  @Column({type:'real',nullable:true})
  precio_Venta:Double;

  @Column({type:'real',nullable:true})
  stock:number;

  @Column({type:'varchar',length:200, nullable:true})
  historia:string;

  @ManyToMany(()=>materialesEntity,(mat) => mat.productos,{nullable:true})
  @JoinColumn()
  materiales:materialesEntity;

  @ManyToMany(()=> artesanosEntity, (art) => art.productos,{nullable:true})
  artesanos:artesanosEntity[];

  @ManyToOne(()=> pedidosEntity, (ped) => ped.productos,{nullable:true})
  @JoinColumn()
  pedidos:pedidosEntity;

  @OneToOne(()=>categoriasEntity, (cat)=> cat.productos,{nullable:true})
  @JoinColumn()
  categorias:categoriasEntity;
}
