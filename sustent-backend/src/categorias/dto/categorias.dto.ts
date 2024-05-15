import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CategoriasDto {
    @IsNumber()
    id_categoria: number;
    @IsString()
    nombre_categoria: string;
    @IsBoolean()
    matCategoria: boolean;
}