import { subcategoriasEntity as categoriasEntity } from './../../subcategorias/entity/subcategorias.entity';
import { IsEmail, IsNumber, IsString } from 'class-validator';
import { ManyToMany, ManyToOne, OneToOne } from 'typeorm';

export class productosEntity {
  @IsNumber()
  id_Producto: number;

  @IsString()
  nombreP: string;

  @IsString()
  descripcion: string;

  @OneToOne(() => categoriasEntity, (categorias) => categorias.categorias, {
    nullable: true,
  })
  categorias: categoriasEntity;

  @IsNumber()
  precio_Venta: number;

  @IsNumber()
  stock: number;

  @ManyToOne(() => artesanosEntity, (artesanos) => artesanos.artesanos, {
    nullable: true,
  })
  artesanos: artesanosEntity;
}
