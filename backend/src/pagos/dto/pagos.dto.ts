import { IsDate, IsNumber, IsString } from 'class-validator';

export class PagosDto {
  @IsNumber()
  id_Compradores: number;

  @IsDate()
  fecha_Pago: Date;

  @IsNumber()
  monto_Pago: number;

  @IsNumber()
  metodo_Pago: number;

  @IsString()
  num_Transac: string;

  @IsNumber()
  edo_Pago: number;
}
