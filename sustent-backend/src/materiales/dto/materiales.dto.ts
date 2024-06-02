import { IsNumber, IsString } from "class-validator";

export class MaterialesDto {
    @IsNumber()
    id_material: number;
    @IsString()
    nombre_material: string;
    @IsString()
    descripcion_material: string;
}