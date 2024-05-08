import { productosEntity } from 'src/productos/entity/productos.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('materiales')
export class materialesEntity {
  @PrimaryGeneratedColumn()
  id_Material: number;

  @Column({ type: 'varchar', length: 30 })
  nombre_Mat: string;

  @Column({ type: 'varchar', length: 60 })
  desc_Mat: string;

  @ManyToMany(() => productosEntity, (prod) => prod.materiales, {
    nullable: true,
  })
  @JoinColumn()
  productos: productosEntity;
}
