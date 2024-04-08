import { IsNumber, IsString } from 'class-validator';

export class MaterialesDto {
    @IsNumber()
    id_Material: number;

    @IsString()
    nombre_Mat: string;

    @IsString()
    desc_Mat: string;

}