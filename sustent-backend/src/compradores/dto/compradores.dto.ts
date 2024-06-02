import { IsNumber } from 'class-validator';

export class compradoresDto {
  @IsNumber()
  id_Usuario: number;
  @IsNumber()
  id_Compradores: number;

  @IsNumber()
  idPagos: number;
  
  @IsNumber()
  idPedidos: number;

  @IsNumber()
  idUsuario: number;
}
