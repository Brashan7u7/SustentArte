import { pagosEntity } from 'src/pagos/entity/pagos.entity';
import { pedidosEntity } from 'src/pedidos/entity/pedidos.entity';
import { productosEntity } from 'src/productos/entity/productos.entity';
import { usuariosEntity } from 'src/usuarios/entity/usuarios.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('compradores')
export class compradoresEntity {
  @PrimaryGeneratedColumn()
  id_Compradores: number;

  @OneToMany(() => pedidosEntity, (pedidos) => pedidos.compradores, {
    nullable: true,
  })
  pedidos: pedidosEntity[];

  @OneToOne(() => usuariosEntity, (usuarios) => usuarios.compradores, {
    nullable: true,
  })
  @JoinColumn()
  usuarios: usuariosEntity;

  @OneToMany(() => pagosEntity, (pagos) => pagos.compradores, {
    nullable: true,
  })
  pagos: pagosEntity[];
}
