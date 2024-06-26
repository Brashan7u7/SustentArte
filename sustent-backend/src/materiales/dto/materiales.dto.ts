import { IsNumber, IsString } from "class-validator";

export class MaterialesDto {
    
    @IsString()
    nombre_material: string;
    @IsString()
    descripcion_material: string;
}