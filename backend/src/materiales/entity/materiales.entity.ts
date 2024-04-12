import { productosEntity } from 'src/productos/entity/productos.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('materiales')
export class materialesEntity {
  @PrimaryGeneratedColumn()
  id_Material: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  nombre_Mat: string;

  @Column({ type: 'varchar', length: 60, nullable: true })
  desc_Mat: string;

  @ManyToMany(() => productosEntity, (prodcutos) => prodcutos.materiales, {
    nullable: true,
  })
  productos: productosEntity[];
}
