import { IsNumber, IsString } from "class-validator";  

export class MaterialesDto {
  @IsString()
  nombre_Mat: string;

  @IsString()
  desc_Mat: string;

  @IsNumber()
  id_Producto: number;
}
