import { IsEmail, IsNumber, IsString } from 'class-validator';
import { artesanosEntity } from 'src/artesanos/entity/artesanos.entity';
import { categoriasEntity } from 'src/categorias/entity/categorias.entity';
import { materialesEntity } from 'src/materiales/entity/materiales.entity';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import {
  Column,
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

  @ManyToMany(() => materialesEntity, (materiales) => materiales.productos, {
    nullable: true,
  })
  materiales: materialesEntity;

  @Column({ type: 'varchar', length: 30, nullable: true })
  nompreP: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  descripcion: string;

  @OneToOne(() => categoriasEntity, (categorias) => categorias.productos, {
    nullable: true,
  })
  @JoinColumn()
  categorias: categoriasEntity;

  @Column({ type: 'real', nullable: true })
  precio_Venta: number;

  @Column({ type: 'real', nullable: true })
  stock: number;

  @ManyToOne(() => artesanosEntity, (artesanos) => artesanos.productos, {
    nullable: true,
  })
  artesanos: artesanosEntity;

  @OneToMany(() => pedidosEntity, (pedidos) => pedidos.productos, {
    nullable: true,
  })
  pedidos: pedidosEntity;
}
