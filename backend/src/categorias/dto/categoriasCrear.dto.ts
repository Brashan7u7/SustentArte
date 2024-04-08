import { IsNumber, IsString } from "class-validator";

export class categoriasDto
{
    @IsString()
    nombreCat:string

    @IsNumber()
    id_subcategoria:number

}