import { usuariosEntity } from 'src/usuarios/entity/usuarios.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('artesanos')
export class artesanosEntity {
  @PrimaryGeneratedColumn()
  id_Artesano: number;

  @OneToOne(() => usuariosEntity, (usuarios) => usuarios.id_usuario, {
    nullable: true,
  })
  usuarios: usuariosEntity;

  @Column({ type: 'varchar', length: 50 })
  descripcion_Trabajo: string;

  @Column({ type: 'varchar', length: 50 })
  xp_Textil: string;

  @Column({ type: 'varchar', length: 50 })
  tec_Artesanales: string;

  @Column({ type: 'varchar', length: 40 })
  reconocimientos: string;

  @Column({ type: 'varchar', length: 40 })
  foto: string;
}
