import { IsNumber, IsString } from "class-validator";

export class CompradorDto {

    @IsString()
    correo:string;

    @IsString()
    password:string;

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