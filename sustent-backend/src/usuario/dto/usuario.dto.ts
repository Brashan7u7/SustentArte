import { IsString } from "class-validator";

export class usuarioDto
{
    @IsString()
    nombre:string;

    @IsString()
    apellidoPaterno:string;

    @IsString()
    apellidoMaterno:string;

    @IsString()
    telefono:string;

    @IsString()
    ciudad:string;

    @IsString()
    estado:string;

    @IsString()
    cp:string;

    @IsString()
    calle:string;

    @IsString()
    colonia:string;

    @IsString()
    numCasa:string;
}