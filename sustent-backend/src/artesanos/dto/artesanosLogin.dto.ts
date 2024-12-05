import { IsNumber, IsString } from "class-validator";

export class artesanosDto
{
    @IsString()
    descripcionTrabajo: string;

    @IsString()
    correo: string;

    @IsString()
    password: string;

    @IsString()
    xp_textil: string;

    @IsString()
    tec_artesanales: string;

    @IsString()
    reconocimientos: string;

    @IsString()
    foto: string;

    @IsString()
    nombre: string;

    @IsString()
    apellidoPaterno: string;

    @IsString()
    apellidoMaterno: string;

    @IsString()
    localidad: string;
}
