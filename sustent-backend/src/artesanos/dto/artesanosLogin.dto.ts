import { IsNumber, IsString } from "class-validator";

export class artesanosDto
{

    @IsString()
    descripcionTrabajo: string;

    @IsString()
    user: string;

    @IsString()
    password: string;

    @IsString()
    xp_textil:string;

    @IsString()
    tec_artesanales:string

    @IsString()
    reconocimientos:string;

    @IsString()
    foto:string;

    @IsNumber()
    usuarioId:number;
}