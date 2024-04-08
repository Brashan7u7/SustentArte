import { IsNumber, IsString } from "class-validator";

export class subcategoriasDto
{
    @IsString()
    nombre_subCat:string

    @IsNumber()
    id_categoria:number
}