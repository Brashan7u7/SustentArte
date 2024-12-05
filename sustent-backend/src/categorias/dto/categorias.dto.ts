import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CategoriasDto {
    @IsString()
    nombre_categoria: string;
}