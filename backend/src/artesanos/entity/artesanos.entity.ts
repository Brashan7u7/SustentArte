import { productosEntity } from 'src/productos/entity/productos.entity';
import { usuariosEntity } from 'src/usuarios/entity/usuarios.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('artesanos')
export class artesanosEntity {
  @PrimaryGeneratedColumn()
  id_Artesano: number;

  @OneToOne(() => usuariosEntity, (usuarios) => usuarios.artesanos, {
    nullable: true,
  })
  usuarios: usuariosEntity;

  @Column({ type: 'varchar', length: 50, nullable: true })
  descripcion_Trabajo: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  xp_Textil: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tec_Artesanales: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  reconocimientos: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  foto: string;

  @ManyToMany(() => productosEntity, (productos) => productos.artesanos, {
    nullable: true,
  })
  productos: productosEntity[];
}
