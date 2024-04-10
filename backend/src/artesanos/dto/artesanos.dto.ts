import { IsNumber, IsString } from "class-validator";

export class artesanosDto
{
    @IsNumber()
    id_Usuario:number

    @IsString()
    descripcion_Trabajo:string

    @IsString()
    xp_Textil:string

    @IsString()
    tec_Artesanales:string

    @IsString()
    reconocimientos:string

    @IsString()
    foto:string

}