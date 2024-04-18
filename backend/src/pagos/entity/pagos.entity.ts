import { compradoresEntity } from 'src/compradores/entity/compradores.entity';
import {
  Column,
  Double,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('pagos')
export class pagosEntity {
  @PrimaryGeneratedColumn()
  id_Pago: number;

  @ManyToOne(() => compradoresEntity, (compradores) => compradores.pagos, {
    nullable: true,
  })
  compradores: compradoresEntity;

  @Column({ type: 'date', nullable: true })
  fecha_Pago: Date;

  @Column({ type: 'real', nullable: true })
  monto_Pago: Double;

  @Column({ type: 'real', nullable: true })
  metodo_Pago: number;

  @Column({ type: 'varchar', length: 30, nullable: true })
  num_Transac: string;

  @Column({ type: 'real', nullable: true })
  edo_Pago: number;
}
