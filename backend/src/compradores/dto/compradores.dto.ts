import { IsNumber } from 'class-validator';

export class compradoresDto {
  @IsNumber()
  id_Usuario: number;
}
